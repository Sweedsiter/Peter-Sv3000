const express = require("express");
const morgen = require("morgan"); //middleware ไว้เช็ค reqส่งมา
const bodyParse = require("body-parser");
const core = require("cors"); //อันนี้เป็นตัวส่งข้อลูลจากหน้าเว็บไปเป็น Json/ข้อมูล ให้ front end
const port = 3000;
const Product = require("./Config/Product");
const app = express();

app.use(morgen("div")); //middleware ไว้เช็ค reqส่งมา
app.use(bodyParse.json({ limit: "10mb" })); //ไว้เช็คที่ส่งมาห้ามเกินตามข้องกำหนด
app.use(core());

// Sever All
app.get("/", async function (req, res) {
  const ad = [{ name: "PeterA" }, { name: "PeterB" }];
  //   res.json(Product.data);
  res.json(ad);
});
app.get("/product", async function (req, res) {
  //  res.send(Product.data);
  const Data = [
    {     
      Group: "Phone",
      Price: "2555",
      Image:
        "https://www.blesssky.com/wp-content/uploads/2023/05/img-product-iPad_10th_Gen_Wi-Fi_Blue-2.jpg",
      Total: "26",
      Details: ` กกกกก  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
      dolorem quo dignissimos tenet ur reprehenderit. Id, officia.
      Assumenda numquam molestias a voluptate. Voluptas, possimus
      temporibus! Amet adipisci odit nihil quod voluptate?`,
    },
    { 
      Group: "Phone",
      Price: "3500",
      Image:
        "https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/p/h/photoprintfrommobile-tesco.jpg",
      Total: "26",
      Details: ` กกกกก  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
      dolorem quo dignissimos tenet ur reprehenderit. Id, officia.
      Assumenda numquam molestias a voluptate. Voluptas, possimus
      temporibus! Amet adipisci odit nihil quod voluptate?`,
    },
    {
     
      Group: "Phone",
      Price: "4000",
      Image:
        "https://www.maxphoto.co.uk/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/p/h/photoprintfrommobile-max.jpg",
      Total: "26",
      Details: ` กกกกก  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
      dolorem quo dignissimos tenet ur reprehenderit. Id, officia.
      Assumenda numquam molestias a voluptate. Voluptas, possimus
      temporibus! Amet adipisci odit nihil quod voluptate?`,
    },
  ];
  res.send(Data);
});

app.listen(port, "localhost", () => {
  console.log("Peter-Sv3000 Started");
});
module.exports = app;
