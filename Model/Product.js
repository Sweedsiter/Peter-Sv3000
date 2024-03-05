const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    Group: {
      type: String,
    },
    Image: {
      type: String,
    },
    Total: {
      type: String,
    },
    Price: {
      type: String,
    },
    Details: String,
  },
  { timestamps: true },
);
module.exports = mongoose.model("product", productSchema);
