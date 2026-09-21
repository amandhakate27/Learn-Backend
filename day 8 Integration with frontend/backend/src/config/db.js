const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.mongodb_uri); // local machine pe chalne wala db 
        console.log('Mongodb connected')
    }catch(err){
        console.log("error message: ", err)
    }
}
module.exports = connectDb;