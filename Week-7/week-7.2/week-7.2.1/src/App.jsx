import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atom/count";
import { evenSelector } from "./store/selector/selector";

function App() {

  return (
    <>
    <RecoilRoot>
      <Count />
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
export default App
