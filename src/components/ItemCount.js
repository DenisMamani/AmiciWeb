import { useEffect, useState } from "react";
import { VscAdd,VscChromeMinimize } from "react-icons/vsc";
const ITemCount=({initial, stock, onAdd})=>{
const[cantidad,setCount]=useState(parseInt(initial));
const incrementar=()=>{
    setCount(cantidad+1);
}
const decrementar=()=>{
    setCount (cantidad-1);
}
useEffect(()=>{
    setCount(parseInt(initial));
}, [initial])
    return(
        <>
            <div className="styleCount">
                <button className="btnProduct" disabled={cantidad<=1} onClick={decrementar}><VscChromeMinimize/></button>
                <span className="cantidad">{cantidad}</span>
                <button className="btnProduct" disabled={cantidad >=stock} onClick={incrementar}><VscAdd/></button>
                <button className="btnGuardar" disabled={stock<=0} onClick={()=> onAdd(cantidad)} >Agregar a carrito</button>
            </div>
        </>
    );
}
export default ITemCount;