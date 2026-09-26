const express = require('express');
const app = express();
const fileRoutes = require('./routes/file.route');
app.use(express.json()); // middleware to parse JSON request bodies


// Use the file routes for handling file uploads
app.use("/file", fileRoutes);

module.exports = app;