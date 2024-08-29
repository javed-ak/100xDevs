import { RecoilRoot, useRecoilValueLoadable } from "recoil"
import { todosAtomFamily } from "./atoms"
// import { Suspense } from "react"

function App() {

  return <RecoilRoot>
    {/* <Suspense fallback="Loading..."> */}
      <Todo id = {1} />
      <Todo id = {2} />
      <Todo id = {3} />
      <Todo id = {4} />
      <Todo id = {5} />
    {/* </Suspense> */}
  </RecoilRoot>
}

function Todo({id}) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id))

  if(todo.state === "loading") {
    return <div>
      loading...
    </div>
  } else if(todo.state === "hasValue") {
  return <>
    <div>
      <h3>{todo.contents.title}</h3>
      <h5>{todo.contents.description}</h5>
    </div>
  </>  
  } else if(todo.state === "hasError") {
    <div>Somthing went wrong...</div>
  }
}
export default App
