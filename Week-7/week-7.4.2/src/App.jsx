import { RecoilRoot, useRecoilValue } from 'recoil'
import { notificationsSet, totalNotificationSelector } from './store/atoms/atoms';

function App() {
  return <>
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  </>
  
}

function MainApp() {
  const notificationCount = useRecoilValue(notificationsSet)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
    <button>Home</button> 

    <button>My Network ({notificationCount.network > 99 ? "99+" : notificationCount.network})</button>
    <button>Jobs ({notificationCount.jobs > 99 ? "99+" : notificationCount.jobs})</button>
    <button>Messaging ({notificationCount.messaging > 99 ? "99+" : notificationCount.messaging})</button>
    <button>Notification ({notificationCount.notifications > 99 ? "99+" : notificationCount.notifications})</button>

    <button>Me ({totalNotificationCount > 499 ? "500+" : totalNotificationCount})</button>  
    </>
  )
}
export default App
