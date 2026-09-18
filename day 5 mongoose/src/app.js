const express = require("express");
const connectDb = require("./config/db");
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // due to DNS issue
const app = express();


connectDb();

app.get("/", (req, res)=>{
    res.send("Home Page");
})


module.exports = app;