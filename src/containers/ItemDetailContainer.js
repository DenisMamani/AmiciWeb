import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import customFetch from "../utils/customFetch";
import products from "../utils/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    const [dato,setDato]=useState({});
    const [loading,setLoading] = useState(false);
    const { id }= useParams();
    useEffect(()=>{
        setLoading(true);
        customFetch(2000,products.find(item=>item.id == id))
        .then((response)=> setDato(response))
        .catch((err)=>console.log(err))
        .finally(()=> setLoading(false))
    },[id])
    return(
        <>
        {loading ? <h1 className="cargando">Cargando...</h1> : <ItemDetail item={dato} />}
        </>
        );
}
export default ItemDetailContainer;