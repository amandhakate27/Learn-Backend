const express = require("express");
const notesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.route")
const app = express();
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // due to DNS issue
app.use(express.json()); // middleware to parse json

connectDb();
app.get("/", (req, res)=>{
    res.send("ok got it!");
})
app.use("/notes", notesRoute)


module.exports = app;
