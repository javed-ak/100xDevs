import { selector } from 'recoil'
import { filterAtom, todosAtom } from '../atom/todosAtoms';

export const filteredTodo = selector({
    key: 'filteredTodo',
    get: (props => {
        const todos = props.get(todosAtom);
        const filter = props.get(filterAtom);
        return todos.filter(todo =>
            todo.title.toLowerCase().includes(filter) ||
            todo.description.toLowerCase().includes(filter)
        );
    })
})