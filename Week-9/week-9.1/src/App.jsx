// import { set } from 'mongoose';
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRender(value => !value);
//       clearInterval(interval)
//     }, 1000);
//   }, [render])

//   return <>
//   <MyCount />
//   {render ? <MyComponent /> : <p style={{display:'flex', justifyContent:'center'}}>UnMounted</p>}
  
//   </>
// }

// function MyCount() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count + 1);
//       clearInterval(interval)
//     }, 1000);
//   }, [count]);

//   return <div>
//      <p style={{display:'flex', justifyContent:'center'}}>{count}</p>
//   </div>

// }
  // function MyComponent() {
  //   const [count, setCount] = useState(0);

  //   const incrementCount = () => {
  //     setCount(count + 1);
  //   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// const MyComponent = () => {
  
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("mount component")

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("unmount component")
//     };
//   }, []);

//   return (
//         <div>
//           <p style={{display:'flex', justifyContent:'center'}}>Component Mounted</p>
//         </div>
//       );
//   // Render UI
// }

// export default App

// ----------------------- useTodos ---------------------------->>



// 
// 

// function useTodos() {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const interval = setInterval(() => { 
//       axios.get("http://localhost:3000/todos/")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })
//       clearInterval(interval)
//       }, 2000);
//   }, [todos, loading])
//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos();
  
//   if(loading){
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track key={todo.id} todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


// ------------------------- useDebounce --------------------------------->>



// ------------------------------ useIsOnline ----------------------------->>

import { ConnectionAlert } from "./components/ConnectionAlert";
import { useIsOnline } from "./Hooks/UseIsOnline";
import { Counter } from './components/Counter';
import { MousePointer } from './components/MousePointer';
import { Debounced } from "./components/Debounce";

function App() {
  const browserStatus = useIsOnline();
  

  return<>
  <div style={{display:'flex', gap:"10px"}}>
    {!browserStatus ? <ConnectionAlert /> : null}
    <MousePointer />
    <Counter />
    <Debounced />
  </div>
  </>
}

export default App