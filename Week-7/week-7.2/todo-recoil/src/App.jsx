import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { descriptionAtom, filterAtom, titleAtom, todosAtom } from './store/atom/todosAtoms';
import { filteredTodo } from './store/selector/filterTodoSelector';

function App() {

  return (
    <RecoilRoot>
      <InputBox />
      <FilterTodo />
      <Todos />
    </RecoilRoot>
  )
}

const InputBox = () => {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  return <div>
    <h2 style={{fontWeight: '900'}}>Add Todos:</h2>
    <input type="text" placeholder='Title' onChange={(e) => {setTitle(e.target.value)} } />
    <input type="text" placeholder='Description' onChange={(e) => {setDescription(e.target.value)}} />
    <button onClick={() => {
      setTodos([...todos, {
        id: Math.random(),
        title: title,
        description: description,
        isDone: false
      }]);
    }}>Add Todo</button>
  </div>
}

const FilterTodo = () => {
  const setFilterValue = useSetRecoilState(filterAtom)
  return (
    <div>
      <h2 style={{fontWeight: '900'}}>Filter Todos:</h2>
      <input type="text" placeholder='Enter text' onChange={(e) => {setFilterValue(e.target.value)}} />
    </div>
  )
}

const Todos = () => {
  const todos = useRecoilValue(filteredTodo);
  return <div>
    <h2 style={{fontWeight: '900'}}>Todos:</h2>
    {todos.map((todo) => {
      return <div key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <button>{todo.isDone ? 'Done' : 'Mark as Done'}</button>
      </div>
    })}
  </div>
}

export default App
