import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtomFamily } from './atoms'

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id))

  return <> 
  <h3>{currentTodo.title}</h3>
  <h5>{currentTodo.description}</h5>
  <br />
  </>
}
export default App
