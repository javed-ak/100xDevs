// import { useState } from "react"

import { use, useEffect, useMemo, useState } from "react";

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



// function App() {
//   const [todoId, setTodoId] = useState(1)
//   return (
//   <>
//   <button onClick={() => setTodoId(1)}>1</button>
//   <button onClick={() => setTodoId(2)}>2</button>
//   <button onClick={() => setTodoId(3)}>3</button>
//   <button onClick={() => setTodoId(4)}>4</button>
//   <button onClick={() => setTodoId(5)}>5</button>
//   <Todo id = {todoId}/>
//   </>
//   )
// }

// const Todo = ({id}) => {
//   const [todo, setTodo] = useState({})
//   useEffect(() => {
//     fetch(`http://localhost:3000/todo?id=${id}`)
//     .then((res) => {
//       res.json()
//       .then((todo) => {
//         setTodo(todo.todo)
//       })
//     })
//   }, [id])
//   return <>
//   <h1>{todo.title}</h1>
//   <p>{todo.description}</p>
//   <button>{todo.isDone == true ? 'Done' : 'Mark as Done'}</button>
//   </>
// }

// export default App;


function App() {
  const [count, setCount] = useState(1)
  const [input, setInput] = useState()
  let calculate = useMemo(() => {
    let sum = 0;
    console.log('I rerendered')
    for(let i=1; i<=input; i++) {
      sum = sum + i;
    }
    return sum;
  }, [input])
  return (
    <>
    <input type="number" onChange={(e) => setInput(e.target.value)}/>
    <h2>{calculate}</h2>
    <button onClick={() => setCount(count + 1)}>Count {count}</button>
    
    </>
  )
}
export default App;