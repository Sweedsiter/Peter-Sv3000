const express = require("express");
const router = express.Router();
const { list, read } = require("../Controllers/ProductController");

// Sever All
router.get("/product", list);
router.get("/product/:id", read);

module.exports = router;
