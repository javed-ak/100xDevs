import { atom } from "recoil";

export const todosAtom = atom({
    key: "todosAtom",
    default: [{
        id: 1,
        title: "Go to GYM",
        description: "Go GYM from 7-9",
        completed: false
    }, {
        id: 2,
        title: "Learn DSA",
        description: "Learn DSA form 9-11",
        completed: false
    }, {
        id: 3,
        title: "Play Football",
        description: "Play football for 1 hour",
        completed: false
    }, {
        id: 4,
        title: "Complete the Assignment",
        description: "Complete today's assignment given by your mentor",
        completed: false
    }, {
        id: 5,
        title: "Go to Market",
        description: "Go market to buy some food",
        completed: false
    }]
});