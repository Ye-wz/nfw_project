const connec = require("./connec");

const userApi = require("./userApi");
const goodsApi = require("./goodsApi");
const userRoute = userApi(connec);
const goodsRoute = goodsApi(connec);

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/user", userRoute);
app.use("/goods", goodsRoute);
app.get("*", (req, res) => {
	res.send({status: 200,message: "未知请求"});
});
app.listen(3030, () => {
  console.log("启动成功");
	console.log("快速访问-> http://localhost:3030");
});
