import { atom, selector } from 'recoil'
import axios from 'axios'

export const networkNotificationCountAtom = atom({
    key: 'networkNotificationCountAtom',
    default: 0
})

export const jobNotificationCountAtom = atom({
    key: 'jobNotificationCountAtom',
    default: 45
})

export const messagingNotificationCountAtom = atom({
    key: 'messagingNotificationCountAtom',
    default: 100
})

export const actualNotificationCountAtom = atom({
    key: 'actualNotificationCountAtom',
    default: 56
})

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: selector({
        key: 'notificationSelector',
        get: async () => {
            const notificationData = await axios.get('http://localhost:3000/notifications');
            return notificationData.data
        }
    })
})

// export const totalNotificationCountState = selector({
//     key: 'totalNotificationCountState',
//     get: (props => {
//         const network = props.get(networkNotificationCountAtom);
//         const job = props.get(jobNotificationCountAtom);
//         const message = props.get(messagingNotificationCountAtom);
//         const notification = props.get(actualNotificationCountAtom);
//         return network + job + message + notification
//     })
// })

export const totalNotificationCountSelector = selector({
    key: 'totalNotificaitonCountSelector',
    get: ({get}) => {
        const allNotifications = get(notificationsAtom);
    return allNotifications.network +
    allNotifications.job +
    allNotifications.message +
    allNotifications.appNotification
    }
})