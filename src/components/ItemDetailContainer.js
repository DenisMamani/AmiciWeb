import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
const {products}=require('../utils/products')

const ItemDetailContainer=()=>{
    const [dato,setDato]=useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        customFetch(2000,products[3])
        .then((response)=> setDato(response))
        .catch((err)=>console.log(err))
        .finally(()=> setLoading(false))
    },[])
    return(
        <>
        {loading ? <h1 className="cargando">Cargando...</h1> : <ItemDetail item={dato} />}
        </>
        );
}
export default ItemDetailContainer;