import { useState, useEffect } from "react";


export function useInterval() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount(count + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [count]);
    return count;
}