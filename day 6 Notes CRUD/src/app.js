const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // due to DNS issue
const app = express();
app.use(express.json())

connectDb();

app.get("/", (req, res)=>{
    res.send("Home Page");
})
app.post("/create",async (req,res)=>{
    let {title , description} = req.body;
    const newNote = await NotesModel.create({
        title,
        description
    })
    res.send({
        success : true,
        message : "Note created successfully!",
        data : newNote,
    })
})
module.exports = app;