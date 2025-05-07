// import { useState } from "react"

import { useEffect, useState } from "react";

// function App() {
//   const [todoId, setTodoId] = useState(4)
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "Todo 1",
//     description: "Description 1",
//     isDone: false
//   }, {
//     id: 2,
//     title: "Todo 2",
//     description: "Description 2",
//     isDone: true
//   }, {
//     id: 3,
//     title: "Todo 3",
//     description: "Description 3",
//     isDone: false
//   }]);

//   const Todo = (props) => {
//     return <div>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//       <button>{props.isDone == true ? 'Done' : 'Mark as Done'}</button>
//     </div>
//   }

//   const addTodo = () => {
//     setTodos([...todos, {
//       id: todoId,
//       title: "Title " + todoId,
//       description: "Description " + todoId,
//       isDone: false
//     }])
//     setTodoId(todoId + 1);
//   }

//   return (
//     <>
//     <button onClick={addTodo}>Add a Todo</button>
//     {todos.map((todo) => <Todo key={todo.id} title = {todo.title} description = {todo.description} isDone = {todo.isDone}/>)}
//     </>
//   )
// }

// export default App


// CardWrapper  --> 


// function App() {
//   return (
//     <>
//     <CardWrapper>
//       hii there
//     </CardWrapper>
//     <CardWrapper>
//       This is Second Card Wrapper
//     </CardWrapper>
//     </>
//   )
// }

// const CardWrapper = ({children}) => {
//   return <div style={{border: '1px solid black', padding: '20px', margin: '10px'}}>
//     {children}
//   </div>
// }

// export default App

function App() {
  useEffect(() => {
    
  }, [])

  return (
    <>
    <div>
      Hello
    </div>
    </>
  )
}
export default App;