const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.connectionUrl)
        console.log("Database connection was successful");
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectMongoDB;