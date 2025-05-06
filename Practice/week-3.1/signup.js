const express = require('express');
const app = express();

const ALL_USER = [{
    firstName: 'Javed',
    username: 'javed',
    password: 'javed123'
}, {
    firstName: 'Harkirat',
    username: 'hkirat',
    password: 'hkirat123'
}, {
    firstName: 'Saif',
    username: 'saif',
    password: 'saif123'
}, {
    firstName: 'Asif',
    username: 'asif',
    password: 'asif123'
}]

const userMiddleware = (req, res, next) => {

}

app.send('/sign-up', userMiddleware, (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
})
app.listen(3000);