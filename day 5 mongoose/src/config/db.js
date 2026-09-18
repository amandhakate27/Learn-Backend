const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
        const uri = "mongodb+srv://amandhakate:learnmongodb12345@learnmongodb.pfdvqto.mongodb.net/";
        await mongoose.connect(uri);
        console.log('Mongodb connected')
    }catch(err){
        console.log("error message: ", err)
    }
}
module.exports = connectDb;