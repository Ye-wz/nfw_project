const express = require("express");
let router = express.Router(); //路由组件,用于设置接口
// eslint-disable-next-line no-unused-vars
module.exports = function(db) {
  router.get("/type", (req, res) => {
    getTypes(data => res.send(data));
  });
  router.get("/type/:types_id", (req, res) => {
    getGoodsList(req.params.types_id, data => res.send(data));
  });
  router.get("/:id", (req, res) => {
    getGoods(req.params.id, data => res.send(data));
  });
  return router;
  // eslint-disable-next-line no-unused-vars
  function getTypes(fn) {
    //递归获取json数据
    var datas = [];
    let selSql = "SELECT * from types ORDER BY rgt-lef desc,lef asc";
    db.query(selSql, (err, data) => {
      if (err) fn({ status: 404, message: "系统出错,请稍后尝试", data: err });
      for (var i = 0; i < data.length; i++) {
        var flat = data[i].rgt - data[i].lef;
        if (flat === 9999) {
          let types_first = {
            types_name: data[i].types_name,
            types_img: data[i].types_img,
            types_data: []
          };
          datas[data[i].rgt / 10000 - 1] = types_first;
        } else if (flat === 99) {
          let types_firstID = parseInt(data[i].rgt / 10000);
          datas[types_firstID].types_data[
            (data[i].rgt - types_firstID * 10000) / 100 - 1
          ] = {
            types_name: data[i].types_name,
            types_data: []
          };
        } else {
          let types_firstID = parseInt(data[i].rgt / 10000);
          let types_secondID = parseInt(
            (data[i].rgt - types_firstID * 10000) / 100
          );
          let types_three = parseInt(
            data[i].rgt - types_firstID * 10000 - types_secondID * 100
          );
          datas[types_firstID].types_data[types_secondID].types_data[
            types_three - 1
          ] = {
            types_name: data[i].types_name,
            types_id: data[i].types_id,
            types_img: data[i].types_img
          };
        }
      }
      fn(datas);
    });
  }
  function getGoods(id, fn) {
    let sqlSql =
      "SElect * from goods a inner JOIN merchants on a.merchants_id = merchants.merchants_id where goods_id = ?;";
    db.query(sqlSql, id, (err, data) => {
      if (err) fn({ status: 404, data: err });
      let item = data[0];
      let dates;
      dates = new Good_data(
        item.goods_id,
        item.goods_name,
        item.goods_price,
        item.types_id,
        item.goods_imgs,
        item.Minimun,
        item.merchants_id,
        item.merchants_name,
        item.merchants_goods_num,
        item.merchants_img
      );
      fn({ status: 200, data: dates });
    });
  }
  function getGoodsList(goods_id, fn) {
    let sqlSql =
      "SElect * from goods a inner JOIN merchants on a.merchants_id = merchants.merchants_id where types_id in (SELECT types_id from types where lef >= (SELECT lef from types where types_name = ?) and rgt <= (SELECT rgt from types where types_name = ?) and types_id != 0);";
    db.query(sqlSql, [goods_id, goods_id], (err, data) => {
      if (err) fn({ status: 404, data: err });
      let datas = [];
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        datas.push(
          new Good_data(
            item.goods_id,
            item.goods_name,
            item.goods_price,
            item.types_id,
            item.goods_imgs,
            item.Minimun,
            item.merchants_id,
            item.merchants_name,
            item.merchants_goods_num,
            item.merchants_img
          )
        );
      }
      fn({ status: 200, data: datas });
    });
  }
};
class Good_data {
  constructor(
    id,
    name,
    price,
    types_id,
    goods_imgs,
    minimun,
    merchants_id,
    merchants_name,
    merchants_goods_num,
    merchants_img
  ) {
    this.goods_id = id;
    this.goods_name = name;
    this.goods_price = price;
    this.types_id = types_id;
    this.goods_imgs = goods_imgs.split(",");
    this.minimun = minimun;
    this.merchants = new Merchants(
      merchants_name,
      merchants_goods_num,
      merchants_img,
      merchants_id
    );
  }
}
class Merchants {
  constructor(name, goods_num, img, types_id, id) {
    this.name = name;
    this.goods_num = goods_num;
    this.img = img;
    this.id = id;
  }
}
