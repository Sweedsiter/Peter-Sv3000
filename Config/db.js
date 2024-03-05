const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://d27saitunlu:ZZ7ijfFF01TdHdnB@sv3000.z3ydfbw.mongodb.net/",
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB not connected");
  }
};
module.exports = connectDB;
