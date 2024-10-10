const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.get("/sum-server", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;
    res.send(sum.toString());
})

app.listen(3000)