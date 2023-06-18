const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Databse Connected");
  } catch (error) {
    console.log("errorr");
  }
};

module.exports = connectDb;