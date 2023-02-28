import { useState } from "react";
function Car(){
    const [fruit, setfruit]=useState("Strawberry")
    return(
        <>
        <p>Fruits are here {fruit}</p>
        <button type="button" onClick={(()=>setfruit("Pineapple"))}>click me</button>
        </>
    )
}
export default Car;