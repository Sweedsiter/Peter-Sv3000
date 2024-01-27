const express = require("express");
const morgen = require("morgan"); //middleware ไว้เช็ค reqส่งมา
const bodyParse = require("body-parser");
const core = require("cors"); //อันนี้เป็นตัวส่งข้อลูลจากหน้าเว็บไปเป็น Json/ข้อมูล ให้ front end
const port = 3000;
const Product = require("./Config/Product");
const PageDatail = require("./Config/PageDatail"); //เกี่ยวกับข้อมูลหน้าเว็บ
const app = express();

app.use(morgen("div")); //middleware ไว้เช็ค reqส่งมา
app.use(bodyParse.json({ limit: "10mb" })); //ไว้เช็คที่ส่งมาห้ามเกินตามข้องกำหนด
app.use(core());

// Sever All
app.get("/", async function (req, res) {
  //   res.json(Product.data);
  res.json(PageDatail);
});
app.get("/product", async function (req, res) {
  res.json(Product.data);
});

app.listen(port, "localhost", () => {
  console.log("Peter-Sv3000 Started");
});
module.exports = app;
