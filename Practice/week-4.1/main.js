const express = require ('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/sum', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2

    res.send(sum.toString());
})

app.listen(3000);