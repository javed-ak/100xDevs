import { useState } from "react";
import axios from "axios";

export const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <>
    <input type="text" placeholder="Title Here" onChange={(e) => {
        const value = e.target.value;
        setTitle(e.target.value)
    }}/>
    <input type="text" placeholder="Description Here" onChange={(e) => {
        const value = e.target.value;
        setDescription(e.target.value);
    }}/>
    <button onClick={() => {
            // axios
            // axios.post("http://localhost:3000/todo", {
            //     title: title,
            //     description: description
            // }, {
            //     headers: {
            //         "Content-type": "application/json"
            //     }
            // })
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res) {
                const json = await res.json();
                alert("Todo added");
            })
        }}>Create Todo</button>
    </>
}