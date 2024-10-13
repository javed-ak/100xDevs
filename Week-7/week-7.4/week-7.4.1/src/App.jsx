import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/atoms/atoms';
import { useEffect } from 'react';


function App() {
  return <>
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  </>
  
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const actualNotificationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
    <button>Home</button> 

    <button>My Network ({networkNotificationCount > 99 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobNotificationCount > 99 ? "99+" : jobNotificationCount})</button>
    <button>Messaging ({messagingNotificationCount > 99 ? "99+" : messagingNotificationCount})</button>
    <button>Notification ({actualNotificationCount > 99 ? "99+" : actualNotificationCount})</button>

    <button>Me ({totalNotificationCount > 499 ? "500+" : totalNotificationCount})</button>  
    </>
  )
}
export default App
