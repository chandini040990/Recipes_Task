// import the module mongoose
const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/Recipe";
// const MONGO_URI = "mongodb://localhost:27017/Recipe";

// connect to mongodb 
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("Error in conecting the MongoDB", error);
    }
}

module.exports = connectDB;