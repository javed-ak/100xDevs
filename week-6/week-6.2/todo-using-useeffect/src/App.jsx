import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState(1)
  return (
    <>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <button onClick={() => setId(5)}>5</button>
      <Todo id = {id} />
    </>
  )
// 2 more minutes, let me fill up my water bottle here, back in two
  function Todo({id}) {
    const [todo, setTodo] = useState({});

    async function fetchResponse() {
      const response = await axios.get(`http://localhost:3000/todo?id=${id}`);
      setTodo(response.data);
    }

    useEffect(() => {
      fetchResponse();
    }, [id])

    return <div>
      <h2>{todo.title}</h2>
      <h5>{todo.description}</h5>
    </div>
  }
}

export default App
