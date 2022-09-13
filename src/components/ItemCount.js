import { useState } from "react";
const ITemCount=()=>{
const[cantidad,setRate]=useState(0);
const handleRate=()=>{
    setRate(cantidad+1);
}
const decrementar=()=>{
    setRate (cantidad-1);
}
    return(
        <>
            <button className="btnProduct" disabled={cantidad<=0} onClick={decrementar}>Decrementar</button>
            {cantidad} producto
            <button className="btnProduct" disabled={cantidad >=10} onClick={handleRate}>Incrementar</button>
        </>
    );
}
export default ITemCount;