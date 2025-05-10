import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { notificationsAtom, totalNotificationCountSelector } from './store/atoms/atoms'

function App() {
  return <>
  <RecoilRoot>
    <NotificationBar />
  </RecoilRoot>
  </>
}

export default App

const NotificationBar = () => {
  // const [notificationsCount, setSotificationsCount] = useRecoilState(notificationsAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const totalNotifications = useRecoilValue(totalNotificationCountSelector);

  return (
    <div>
      <button>{ notificationsCount.network > 90 ? `Network Notification 90+` :`Network Notification ${notificationsCount.network}`}</button>
      <button>{ notificationsCount.job > 90 ? `Job Notification 90+` :`Job Notification ${notificationsCount.job}`}</button>
      <button>{ notificationsCount.message > 90 ? `Message Notification 90+` :`Message Notification ${notificationsCount.message}`}</button>
      <button>{ notificationsCount.appNotification > 90 ? `Notification 90+` :`Notification ${notificationsCount.appNotification}`}</button>
      <button>{ totalNotifications > 90 ? `Total 90+` :`Total ${totalNotifications}`}</button>
    </div>
  )
}

// networkNotificationCount
// jobNotificationCount
// messagingNotificationCount
// actualNotificationCount
// totalNotificationCount