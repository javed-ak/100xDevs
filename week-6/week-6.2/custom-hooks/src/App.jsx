import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

function App() {
  function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const response = axios.get("http://localhost:3000/todos")
      .then((response) => setTodos(response.data.todos))
    }, []);
    
    return todos;
  }
  const todos = useTodos();
  function Todo(props) {
    
    return <div>
      <h2>{props.title}</h2>
      <h5>{props.description}</h5>
    </div>
  }
  
  
  return (
    <>
      {todos.map((todo) => <Todo key = {todo.id} title = {todo.title} description = {todo.description} />)}
    </>
  )
}

export default App
