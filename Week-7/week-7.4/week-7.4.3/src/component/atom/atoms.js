import { atomFamily } from 'recoil' 
import { TODOS } from '../../todos'

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id => {
        return TODOS.find(x => x.id === id)
    }
})

// atom/atomFamily does not do async backend call  

// export const todosAtomFamily = atomFamily({
//     key: "todosAtomFamily",
//     default: async (id) => {
//         const todos = await TODOS();  // Fetch todos asynchronously
//         return todos.find(x =>e x.id === id) || null;  // Find the todo by ID, return null if not found
//     }
// });
