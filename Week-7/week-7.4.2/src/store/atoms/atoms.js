import { atom, selector } from 'recoil'
import axios from 'axios'

export const notificationsSet = atom({
    key: "notificationsSet",
    default: selector({
        key: "notificationsSetSelector",
        get: async () => {
            const res = await axios.get("http://localhost:8080/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotification = get(notificationsSet);
        
        return allNotification.network + allNotification.jobs + allNotification.messaging + allNotification.notifications;
    }
})