function App() {

  return (
    <>
      <Todos title={"Title"} description={"Description"} />
    </>
  )
}
interface TodoProp {
  title: String;
  description: String;
}
function Todos(props: TodoProp) {
  return <div>
    <h2>{props.title}</h2>
    <h5>{props.description}</h5>
  </div>
}

export default App
