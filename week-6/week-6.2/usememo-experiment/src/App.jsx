import { useState, useMemo } from "react"

function App() {

  return (
    <>
    <CardWrapper>
      <ChildCardWrapper />
    </CardWrapper>
    <CardWrapper>
      <Button />
    </CardWrapper>
    </>
  )

  function CardWrapper({children}) {
    return <div style={{border: "2px solid #00000012", padding: "10px", margin: "10px"}}>
      {children}
    </div>
  }

  function Button() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Counter {count}</button>
  }

  function ChildCardWrapper() {
    const [sum, setSum] = useState(0);
    let count = 0;
    return <div>
      <input onChange={(e) => {
        let num = e.target.value;
        for(let i = 1; i <= num; i++) {
          count += i;
        }
        setSum(count);
      }} type="number" name="number" id="" placeholder="Enter Number" />
      <p>Sum is {sum}</p>
    </div>
  }
}

// Use of useMemo

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(0);

//   let count = useMemo(() => {
//     let finalCount = 0;
//     for( let i = 1; i <= inputValue; i++) {
//       finalCount += i;
//     }
//     return finalCount
//   }, [inputValue]);

//   return <>
//   <input onChange={(e) => {
//     setInputValue(e.target.value)
//   }} type="text" name="" id="" placeholder="Enter Number" />
//   <div>Sum from 1 to {inputValue} is {count} </div>
//   <button onClick={() => {setCounter(counter + 1)}}>Counter {counter}</button>
//   </>
// }

export default App