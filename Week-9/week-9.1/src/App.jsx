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



// ------------------------- useInterval ----------------------------->>


// import { useEffect, useState } from "react";

// 

// function App() {
//   

//   

//   return <>
//     
//   </>;
// }

// export default App;


// ------------------------- useDebounce --------------------------------->>

// import { useState, useEffect } from 'react';

// const useDebounce = (value, delay) => {
//   // State to store the debounced value
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     // Set up a timer to update the debounced value after the specified delay
//     const timerId = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     // Clean up the timer if the value changes before the delay has passed
//     return () => clearTimeout(timerId);
//   }, [value, delay]);

//   return debouncedValue;
// };

// function App() {
//   const[value, setValue] = useState("")
//   const debouncedValue = useDebounce(value, 500)


//   return <>
//   <input type="text" placeholder='write somthing here..' onChange={(e) => {
//      setValue(e.target.value)
//   }} />
//   <h1>{debouncedValue}</h1>
//   </>
// }

// export default App

// ------------------------------ useIsOnline ----------------------------->>
import { useState } from 'react';

import { ConnectionAlert } from "./components/ConnectionAlert";
import { useIsOnline } from "./Hooks/UseIsOnline";
import { useMousePointer } from "./Hooks/useMousePointer";
import { useInterval } from './Hooks/useInterval';
import { Counter } from './components/Counter';
import { MousePointer } from './components/MousePointer';

function App() {
  const browserStatus = useIsOnline();
  

  return<>
  <div style={{display:'flex', gap:"10px"}}>
    {!browserStatus ? <ConnectionAlert /> : null}
    <MousePointer />
    <Counter />
  </div>
  </>
}

export default App