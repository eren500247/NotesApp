const mongoose = require("mongoose");

const config = require("../config.json")

const connectDb = async()=>{
    try {
        await mongoose.connect(config.connectionString)
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDb;