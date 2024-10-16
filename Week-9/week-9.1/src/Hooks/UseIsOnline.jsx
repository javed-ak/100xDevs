import { useEffect, useState } from "react";

export const useIsOnline = () => {
    const [status, setStatus] = useState(window.navigator.onLine);
  
    useEffect(() => {
      setInterval(() => {
        window.addEventListener("online", () => setStatus("true"))
        window.addEventListener("offline", () => setStatus("true"))
      }, 5000);
    }, []);
  
    return status;
  }