import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
    setInterval(fetchTodos, 5000);
  }, []);

  const Todo = function Todo(props) {
    return <div>
      <h2>{props.title}</h2>
      <h5>{props.description}</h5>
      <button>{props.completed}</button>
    </div>
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      {todos.map((todo) => <Todo key = {todo.id} title = {todo.title} description = {todo.description} completed = {todo.completed ? "Completed" : "Mark as complete"} />)}
    </div>
  );
}

export default App;
