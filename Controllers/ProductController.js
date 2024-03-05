const DBproduct = require("../Model/Product");

// List Products
exports.list = async function (req, res) {
  try {
    const products = await DBproduct.find({}).exec();
    res.send(products);
    // console.log("Time: ", Date.now(), "This Products Page");
  } catch (error) {
    console.log("error");
    res.status(500).send("Sever error");
  }
};

// List read
exports.read = async function (req, res) {
  try {
    const id = req.params.id;
    const product = await DBproduct.findOne({ _id: id }).exec();
    res.send(product);
  } catch (error) {
    console.log("error");
    res.status(500).send("Sever error");
  }
};
