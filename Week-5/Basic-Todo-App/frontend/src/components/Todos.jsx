import axios from "axios";


export function Todos({todos}) {

    return <>
        {todos.map(function(todo) {
            return <>
                <div key = {todo.id}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <button onClick={() => {
                    axios.put(`http://localhost:3000/todo/${todo.id}`, {
                        completed: true
                    }, {
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(() => {
                        alert("Todo updated successfully");
                    })
                    .catch(function(error) {
                        console.error("There was an error updating the todo!", error);
                    });
                    
                }}>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            </>
        })}
    </>
}