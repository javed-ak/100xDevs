const express = require("express");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");

const jwtSecret = "Javed-Ak"

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:adminkapassword@cluster0.yojdofd.mongodb.net/newappuser");

const User = mongoose.model('Users', {
    name : String,
    email : String,
    password : String
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });

    if(existingUser) {
         return res.status(403).json("Username already Exists");
    }

    var token = jwt.sign({username}, jwtSecret)
    
    const user = new User({
        name : name,
        email : username,
        password : password
    });
    
    user.save();
    
    res.json("User created Successfully.., Your token Number is " + token);
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtSecret);
        const username = decoded.username;

        res.json({
            user: User.filter((value) => {
                if(value.email = username) {
                    return false;
                } else {
                    return true;
                }
            })
        })
    } catch (err) {
        res.status(403).json("Invalid Token");
    }
})
app.listen(3000)