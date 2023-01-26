const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async ()=>{
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(`Mongoose connect :${connect.connection.host}`);
}

module.exports = connectDB ;