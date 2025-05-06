const express = require('express');
const z = require('zod');

const app = express();

const schema  = z.array(z.number());

app.use(express.json());

app.get('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    const kidneyLength = kidneys.length;
    if(!response.success){
        res.status(403).json({
            msg: 'You entered wrong inputs'
        })
    }
    res.send('You have ' + kidneyLength +' Kidneys');
})

app.use((err, req, res, next) => {
    res.json({
        msg: 'Something went wrong with our server!'
    })
})
app.listen(3000);