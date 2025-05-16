import { useEffect, useState } from 'react'
import './App.css'

export function App() {
  const [mount, setMount] = useState(true)

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent({setMount}) {
  useEffect(() => {
    setInterval(() => {setMount(false)}, 2000)
  }, [mount])
  return (
    <div>Hello, Javed</div>
  )
}

export default App
