import { atom } from 'recoil'

export const todosAtom = atom({
    key: 'todosAtom',
    default: [{
        id: 1,
        title: 'something',
        description: 'something',
        isDone: false
    }]
})