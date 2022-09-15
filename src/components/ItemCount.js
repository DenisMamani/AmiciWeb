import { useState } from "react";
import { VscAdd,VscChromeMinimize } from "react-icons/vsc";
import getList from "../utils/getProducts";
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
            <div className="styleCount">
                <button className="btnProduct" disabled={cantidad<=0} onClick={decrementar}><VscChromeMinimize/></button>
                {cantidad}
                <button className="btnProduct" disabled={cantidad >=10} onClick={handleRate}><VscAdd/></button>
            </div>
        </>
    );
}
export default ITemCount;