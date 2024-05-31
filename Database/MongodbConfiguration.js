//mongoDBconfiguration.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;



const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(con=>{
    console.log(`MongoDB is connected to the host: ${con.connection.host} `)

  })
};

module.exports = connectDB;
