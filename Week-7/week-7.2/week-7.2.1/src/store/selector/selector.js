import { selector } from "recoil";
import { countAtom } from "../atom/count";
import { todosAtom } from "../atom/todos";

export const evenSelector = selector({
    key: "evenSelector",
    get: (props) => {
        const even = props.get(countAtom)
        return (even % 2 == 0)
    }
})

export const filteredSelector = selector({
    key: "filteredSelector",
    get: (props) => {
        const todos = props.get(todosAtom);
        const filter = props.get()

        return todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
    }
})