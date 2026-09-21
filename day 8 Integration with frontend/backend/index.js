const app = require("./src/app");
require("dotenv").config();

let port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})