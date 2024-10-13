import { atomFamily } from 'recoil' 
import { TODOS } from './todos'

export const todosAtomFamily = atomFamily({
    key: "todosAtom",
    default: id => {
        return TODOS.find(x => x.id === id)
    }
})