import { useState } from "react";
import { useDebounce } from "../Hooks/useDebounce";

export function Debounced() {
    const[value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500);
  
    return <div style={{border:"1px solid grey", fontSize:"36px", padding:"20px", width:"250px", height:"150px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div>
            <input type="text" placeholder='write somthing here..' onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
            <h3>{debouncedValue}</h3>
        </div>
    </div>
  }