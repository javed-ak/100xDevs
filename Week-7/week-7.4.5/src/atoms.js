import { atomFamily, selectorFamily } from 'recoil'
import axios from 'axios'

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamily',
        get: (id) => async () => {
            await new Promise(r => setTimeout(r, 5000))
            const res = await axios.get(`http://localhost:8080/todo?id=${id}`)
            return res.data.todo;
        } 
    })
})