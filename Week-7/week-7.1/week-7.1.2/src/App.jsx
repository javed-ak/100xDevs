import { useState } from "react"
import { CountContext } from "./components/CountContext";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
    </CountContext.Provider>
    </>
  )
}

function Count({setCount}) {
  return <>
    <CountRendered />
    <Button setCount={setCount}/>
  </>
}

function CountRendered() {
  const count = useContext(CountContext);

  return <>
    {count}
  </>
}
function Button({setCount}) {
  const count = useContext(CountContext);

  return <div>
  <button onClick={() => setCount(count + 1)}>Increase</button>
  <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>
}
export default App
