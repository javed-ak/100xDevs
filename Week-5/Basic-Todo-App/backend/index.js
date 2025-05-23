const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success) {
        res.status(401).json({
            msg: "You send the wrong Inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    
    if(!parsedPayload.success) {
        res.status(401).json({
            msg: "You send the wrong Inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Marked as Completed"
    })
})

app.listen(3000)