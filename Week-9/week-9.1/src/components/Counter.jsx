import { useInterval } from "../Hooks/useInterval"

export const Counter = () => {
    const count = useInterval()
    return <div style={{border:"1px solid grey", fontSize:"85px", padding:"20px", width:"100px", height:"100px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        {count}
    </div>
}