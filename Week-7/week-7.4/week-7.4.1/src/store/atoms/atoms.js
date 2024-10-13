import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 6
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "noticationAtom",
    default: 95
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobjobsAtomCount = get(jobsAtom);
        const messagingAtomCount = get(messagingAtom);
        const noticationAtomCount = get(notificationAtom);
        
        return networkAtomCount + jobjobsAtomCount + messagingAtomCount + noticationAtomCount;
    }
})