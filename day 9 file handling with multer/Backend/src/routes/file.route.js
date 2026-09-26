
const express = require('express');
const upload = require('../config/multer');
const router = express.Router()

router.post("/", upload.single('image'), (req,res)=>{
    try{
        let data = req.body;
        let file = req.file;
        console.log(data);
        console.log(file);
        res.status(200).json({message: "File Received successfully"});
    }catch(err){
        return res.status(500).json({message: "Internal Server Error"});
    }
})

module.exports = router;