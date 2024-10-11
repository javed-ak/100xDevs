import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3000/todos")
      .then((response) => {
        setTodos(response.data.todos)
      })
  }, [Todos])

  return <>
  <h1 style={{display: "flex", justifyContent: "center"}}>ToDo's</h1>
  <CreateTodo />
  <Todos todos = {todos} />
  </>
}

export default App
