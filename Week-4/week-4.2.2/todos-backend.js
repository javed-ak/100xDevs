const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());

const todos = [{
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
}, {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
}, {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,

}, {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
}, {

    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
}]

app.get("/todos", (req, res) => {
    const randomTodos = [];
    for (let i = 0; i < todos.length; i++) {
        if(Math.random() > 0.5) {
            randomTodos.push(todos[i]);
        }
    }
    res.json({
        todos: randomTodos
    })
})

app.get("/todo", (req, res) => {
    const id = req.query.id;
    const todo = todos.find((todo) => todo.id === parseInt(id));
  
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  });
  
app.listen(3000);