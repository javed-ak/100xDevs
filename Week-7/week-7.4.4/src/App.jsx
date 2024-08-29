import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtomFamily } from './atoms'

function App() {

  return <RecoilRoot>
      <Todo id = {1} />
      <Todo id = {4} />
  </RecoilRoot>
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id))
  return <>
  <h3>{currentTodo.title}</h3>
  <h3>{currentTodo.description}</h3>
  </>
}
export default App
