const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "mypassword";
const app = express();

app.use(express.json());

const ALL_USERS = [{
    email: "javed@gmail.com",
    password: "javed",
    name: "Javed Akhtar"
}, {
    email: "raman@gmail.com",
    password: "raman",
    name: "Raman"
}, {
    email: "harkirat@gmail.com",
    password: "harkirat",
    name: "Harkirat Singh"
}];

const userExist = (username, password) => {
    // ALL_USERS.filter((username, password) => {
    //     if(username == email && password == password) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    let userExist = false;
    for( let i = 0; i < ALL_USERS.length; i++) {
        if( ALL_USERS[i].email == username && ALL_USERS[i].password == password ) {
            userExist = true
        }
    }
    return userExist;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password)) {
        return res.status(403).json("User Not Exists");
    }
    
    var token = jwt.sign({username}, jwtPassword)
    return res.json({
        token
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter((user) => {
                if(user.email == username) {
                    return false;
                } else {
                    return true;
                }
            })
        })
    } catch (err) {
        res.status(403).json("Invalid Token")
    }
})

app.listen(3000);