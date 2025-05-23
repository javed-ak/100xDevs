import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atom/count";
import { evenSelector } from "./store/selector/selector";
import { todosAtom } from "./store/atom/todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <RecoilRoot>
      <Count />
      <FilterBox />
      <Todos />
    </RecoilRoot>
    </>
  )
}

function Count() {
  return <>
    <CountRendered />
    <Button />
    <CheckNumber />
  </>
}

function CountRendered() {
  const count = useRecoilValue(countAtom);
  return <>
    {count}
  </>
}

function Button() {
  const setCount = useSetRecoilState(countAtom);

  return <div>
  <button onClick={() => setCount(count => count + 1)}>Increase</button>
  <button onClick={() => setCount(count => count - 1)}>Decrease</button>
  </div>
}

function CheckNumber() {
  const isEven = useRecoilValue(evenSelector);
  // if(number % 2 == 0 && number != 0) {
  //   return <div>
  //     Number is Even
  //   </div>
  // }
  return <div>
    {isEven ? null : "Number is Even"}
  </div>
}

function FilterBox() {
  return <div>
    <input type="text" name="" id="" placeholder="Find your Todo" />
  </div>
}

function Todos() {
  const todos = useRecoilValue(todosAtom)
  return <div>
    {todos.map((todo) => title = {title}, description = {description})}
    <h2>{title}</h2>
    <h5>{description}</h5>
  </div>
}
export default App
