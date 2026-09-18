let http = require("http");
let port = 3000;
let server = http.createServer((req, res)=>{
    if(req.url === "/users"){
        res.end("Users Page");
    }
    if(req.url === "/about"){
        res.end("About Page");
    }
    if(req.url === "/contact"){
        res.end("Contact Page");
    }
})
server.listen(port, ()=>{
    console.log(`server is running on port ${port}...`)
} )

