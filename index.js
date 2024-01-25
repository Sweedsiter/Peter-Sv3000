const express = require("express");
const morgen = require("morgan"); //middleware ไว้เช็ค reqส่งมา
const bodyParse = require("body-parser");
const port = 3000;

const app = express();

app.use(morgen("div")); //middleware ไว้เช็ค reqส่งมา
app.use(bodyParse.json({ limit: "10mb" })); //ไว้เช็คที่ส่งมาห้ามเกินตามข้องกำหนด

// Sever All
app.get("/", function (req, res) {
  const product = "peter-SV3000";
  res.send(product);
});

app.listen(port, "localhost", () => {
  console.log("Peter-Sv3000 Started");
});
module.exports = app;
