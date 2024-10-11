import { useState } from "react"; 
function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{
    title: "Go to GYM",
    description: "Go GYM at 6PM",
    completed: false
  }, {
    title: "Learn DSA",
    description: "Learn DSA form 9-11",
    completed: false
  }, {
    title: "Do Lunch",
    description: "It's time to have Lunch",
    completed: false
  }])

  function AddTodo() {
    return <button onClick={() => {
      setTodos([...todos, {
        title: "New Todo",
        description: "New Todo Description"
      }])
    }}>Add Todo</button>
  }
  return <div>
    <CustomButton count = {count} setCount = {setCount} />
    <AddTodo />
    {todos.map((todo)=> {
      return <Todo title = {todo.title} description = {todo.description}/>
    })}
  </div>
  function Todo(props) {
    return <>
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
    </>
  }

  function CustomButton(props) {
    const buttonClicked = () => {
      props.setCount(props.count + 1);
    }
    return <button onClick={buttonClicked}>
      Counter {props.count}
    </button>
  }
}

export default App
