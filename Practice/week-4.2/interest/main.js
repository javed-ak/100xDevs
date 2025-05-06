const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/interest', (req, res) => {
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);

    const interest = ( p * r * t ) / 100;
    const total = p + interest;
    res.json({
        interest: interest,
        total: total
    })
})

app.listen(3000);