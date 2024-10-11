import React,{ useState } from "react"

function App() {

  const [name, setName] = useState("Javed")
  return (
    <>
      <Header title = "Javed" />
      <Header title = "Javed" />
      <Header title = {name} />
      <Header title = "Javed" />
      <Header title = "Javed" />
      <button onClick={updateName}>Click me to change the Name</button>
    </>
  )

  function updateName() {
    let random = Math.random()
    if(random <= 0.3) {
      setName("Harkirat");
    } else if(random >= 0.4 && random <= 0.6) {
      setName("Raman")
    } else {
      setName("Javed")
    }
  }
}

const Header = React.memo(function Header({title}) {
  return <div>Hello {title}</div>
})

export default App
