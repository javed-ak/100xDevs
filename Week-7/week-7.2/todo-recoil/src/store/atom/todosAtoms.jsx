import { atom } from "recoil";

export const todosAtom = atom({
    key: "todosAtom",
    default: [{
        id: 1,
        title: "Go to GYM",
        description: "Go GYM from 7-9",
        isDone: true
    }, {
        id: 2,
        title: "Learn DSA",
        description: "Learn DSA form 9-11",
        isDone: true
    }, {
        id: 3,
        title: "Play Football",
        description: "Play football for 1 hour",
        isDone: false
    }, {
        id: 4,
        title: "Complete the Assignment",
        description: "Complete today's assignment given by your mentor",
        isDone: true
    }, {
        id: 5,
        title: "Go to Market",
        description: "Go market to buy some food",
        isDone: false
    }]
});

export const titleAtom = atom({
    key: 'titleAtom',
    default: ''
})

export const descriptionAtom = atom({
    key: 'descriptionAtom',
    default: ''
})

export const filterAtom = atom({
    key: 'filterAtom',
    default: ''
})