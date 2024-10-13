import { atomFamily, selectorFamily } from 'recoil'
import axios from 'axios'
export const todosAtomFamily = atomFamily({
    key: "todosAtom",
    default: selectorFamily({
        key: "todoSelector",
        get: (id) => async () => {
            const res = await axios.get(`http://localhost:8080/todo?id= ${id}`)
            return res.data.todo;
        }
    })
})