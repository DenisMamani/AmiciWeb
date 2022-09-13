import { useState } from "react";
const ITemCount=()=>{
const[cantidad,setRate]=useState(0);
const handleRate=()=>{
    setRate(cantidad+1);
}
const decrementar=()=>{
    if(cantidad>0){
    setRate (cantidad-1);}
    else{
    }
}
    return(
        <>
            <button className="btnProduct" onClick={decrementar}>Decrementar</button>
            {cantidad} producto
            <button className="btnProduct" onClick={handleRate}>Incrementar</button>
        </>
    );
}
export default ITemCount;