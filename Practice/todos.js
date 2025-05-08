const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

const todos = [{
	id: 1,
	title: "Title 1",
	description: "Description 1",
	isDone: false
}, {
	id: 2,
	title: "Title 2",
	description: "Description 2",
	isDone: true
}, {
	id: 3,
	title: "Title 3",
	description: "Description 3",
	isDone: false
}, {
	id: 4,
	title: "Title 4",
	description: "Description 4",
	isDone: true
}, {
	id: 5,
	title: "Title 5",
	description: "Description 5",
	isDone: false
}]

app.get('/todos', (req, res) => {
	res.json({
		todos
	})
})

app.get('/todo', (req, res) => {
	const id = req.query.id;
	const todo = todos.find(todo => todo.id === Number(id));
	res.json({
		todo
	})
})
const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server is running on Port ' + PORT);
})
