const express = require("express");
const app = express();;
// middleware for parsing json data
app.use(express.json());
let port = 3000;
let users = [
    {
        id: 1,
        name: "Aman Sharma",
        role: "Backend Developer",
        city: "Indore",
        maritalStatus: "Single"
    },
    {
        id: 2,
        name: "Priya Verma",
        role: "Frontend Developer",
        city: "Bhopal",
        maritalStatus: "Married"
    },
    {
        id: 3,
        name: "Rahul Mehta",
        role: "Full Stack Developer",
        city: "Pune",
        maritalStatus: "Single"
    },
    {
        id: 4,
        name: "Sneha Patel",
        role: "UI/UX Designer",
        city: "Ahmedabad",
        maritalStatus: "Married"
    }
]
// GET - Read

app.get("/", (req,res)=>{
    res.send(users);
});

// POST - create user
app.post("/create", (req,res)=>{
    let body = req.body;
    users.push(body);
    res.json({
        message: "user created succecssfully",
        data : body,
    })
})

// UPDATE - updation in users

app.put("/user/:id", (req, res)=>{
    let id = Number(req.params.id);
    let {maritalStatus} = req.body;
    let updatedUser = users.map((u)=> u.id === id ? {...u, maritalStatus} :u);
    users = updatedUser;
    res.send(updatedUser);
})

// DELETE 

app.delete("/user/:id", (req,res)=>{
    let id = Number(req.params.id);
    let usersData = users.filter((u)=> u.id !== id);
    users = usersData;
    res.send("user deleted successfully");
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
