const express = require("express");
const notesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.route")
const cors = require("cors");
const app = express();
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // due to DNS issue
app.use(express.json()); // middleware to parse json
app.use(cors({
    origin: "http://localhost:5173", // frontend origin
})); // middleware to enable CORS

connectDb();
app.get("/", (req, res)=>{
    res.send("ok got it!");
})
app.use("/notes", notesRoute)


module.exports = app;
