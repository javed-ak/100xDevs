const express = require('express');
const zod = require('zod')
const app = express();

app.use(express.json());

const userSchema = zod.object({
    username: zod.string(),
    fullName: zod.string(),
    password: zod.string().min(8),
    email: zod.string().email()
})

app.post('/register', (req, res) => {
    const inputs = userSchema.safeParse(req.body);

    if(!inputs.success) {
        res.status(403).json({
            msg: 'Wrong inputs'
        })
    }

    res.json({
        msg: "Congratualations " + inputs.data.fullName +"! You're registered successfully."
    })
})

app.use((err, req, res, next) => {
    res.status(403).json({
        msg: 'Something went wrong!'
    })
})
app.listen(3000);