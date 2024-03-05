const express = require("express");
const app = express();
const router = require("./Routs/Router");
const port = 3000;

const morgen = require("morgan"); //middleware ไว้เช็ค reqส่งมา

const core = require("cors"); //อันนี้เป็นตัวส่งข้อลูลจากหน้าเว็บไปเป็น Json/ข้อมูล ให้ front end

// ดึง Database
const connectDB = require("./Config/db");
connectDB();

app.use(morgen("div")); //middleware ไว้เช็ค reqส่งมา

const bodyParse = require("body-parser");

app.use(bodyParse.json({ limit: "10mb" })); //ไว้เช็คที่ส่งมาห้ามเกินตามข้องกำหนด
app.use(core());

app.use(router);

app.listen(port, "localhost", () => {
  console.log("Peter-Sv3000 Started");
});
module.exports = app;
