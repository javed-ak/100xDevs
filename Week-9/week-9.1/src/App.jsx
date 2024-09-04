// import React, { useState, useEffect } from 'react';

// function App() {
//   return <>
//   <MyComponent />
//   </>
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

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("mount component")

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("unmount component")
//     };
//   }, []);

//   // Render UI
// }



// ----------------------- useTodos ---------------------------->>



// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos() {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     axios.get("http://localhost:3000/todos/")
//     .then(res => {
//       setTodos(res.data.todos)
//       setLoading(false)
//     })
//   }, [])
//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos();
  
//   if(loading){
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
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




// ------------------ useMousePointer --------------------->>


// import { useEffect, useState } from 'react'

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// export default App




// ------------------------- useInterval ----------------------------->>


// import { useEffect, useState } from "react";

// function useInterval(fn, timeout) {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fn();
//     }, timeout);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [fn, timeout]); // Ensure the effect reruns if fn or timeout changes
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(prevCount => prevCount + 1); // Use functional update to ensure you get the latest state
//   }, 1000);

//   return <>
//     <div>The count is {count}</div>
//   </>;
// }

// export default App;


// ------------------------- useDebounce --------------------------------->>

import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  const[value, setValue] = useState("")
  const debouncedValue = useDebounce(value, 500)


  return <>
  <input type="text" placeholder='write somthing here..' onChange={(e) => {
     setValue(e.target.value)
  }} />
  <h1>{debouncedValue}</h1>
  </>
}

export default App