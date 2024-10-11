import { useState } from "react"

function App() {
  let newId = 3;
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to GYM",
    description: "Go GYM from 5-7",
    completed: false
  }, {
    id: 2,
    title: "Go to College",
    description: "Go College at 7AM",
    completed: false
  }, {
    id: 3,
    title: "Learn DSA",
    description: "Learn DSA from 9-11",
    completed: false
  }])

  const addTodo = () => {
    setTodos([...todos, {
      id: newId++,
      title: "New Todo",
      description: "New Todo Description",
      completed: false
    }])
  }
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => <Todo key ={todo.id} title = {todo.title} description = {todo.description} />)}
      {/* {todos.map((todo) => {
        return <Todo title = {todo.title} description = {todo.description}/>
      })} */}
    </>
  )
}

const Todo = function Todo(props) {
  return <>
    <h2>{props.title}</h2>
    <h5>{props.description}</h5>
  </>
}

export default App
