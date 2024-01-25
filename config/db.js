const mongoose = require("mongoose")
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb Database ${mongoose.connection.host}`);
    }catch (error) {
        console.log(`Mongodb Database Error ${error}`.bgRed.white);
    }
};

module.exports = connectDB
