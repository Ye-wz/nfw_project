const express = require("express");
let router = express.Router(); //路由组件,用于设置接口
module.exports = function(db) {
  router.post("/login", (req, res) => {
    let selSql =
      "select * from userinfo where userName= ? or tel= ? and  password= ?";
    db.query(
      selSql,
      [req.body.userName, req.body.tel, req.body.password],
      (err, data) => {
        if (err) {
          res.send({ status: 401, message: "系统出错,请稍后尝试", data: err });
        } else {
          if (data.length === 1) {
            res.send({ status: 200, message: "登录成功", data: data });
          } else {
            res.send({ status: 204, message: "用户名或密码错误" });
          }
        }
      }
    );
  });
  router.post("/registered", (req, res) => {
    if (req.body.password === undefined || req.body.tel === undefined) {
      res.send({
        status: 404,
        message: "信息错误"
      });
      return;
    }
    queryUserTel(req.body.tel, result => {
      if (result) res.send({ status: 201, message: "您已注册过" });
      else {
        var userName;
        var strings =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (req.body.userName === undefined) {
          userName = "";
          for (var i = 0; i < 14; i++) {
            userName += strings.charAt(Math.random() * strings.length);
          }
        } else {
          userName = req.body.userName;
        }
        var selSql =
          "insert into userinfo (userName,password,tel) values (?,?,?)";
        db.query(
          selSql,
          [userName, req.body.password, req.body.tel],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
              res.send({
                status: 200,
                message: "恭喜,注册成功",
                data: result
              });
            } else {
              res.send({
                status: 201,
                message: "注册失败,请再试一遍",
                data: result
              });
            }
          }
        );
      }
    });
  });
  function queryUserTel(tel, fn) {
    var selSql = "select * from userinfo where tel= ?";
    db.query(selSql, tel, (err, data) => {
      if (err) throw err;
      if (data.length > 0) fn(true);
      else {
        fn(false);
      }
    });
  }
  return router;
};