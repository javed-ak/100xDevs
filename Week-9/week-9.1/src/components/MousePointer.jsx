import { useMousePointer } from "../Hooks/useMousePointer";

export const MousePointer = () => {
    const mousePointer = useMousePointer();

    return <div style={{border:"1px solid grey", fontSize:"24px", padding:"20px", width:"100px", height:"100px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>{mousePointer.x}, {mousePointer.y}</div>
    </div>
}