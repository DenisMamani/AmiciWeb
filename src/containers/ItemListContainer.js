import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import customFetch from "../utils/customFetch";
import { products } from "../utils/products";
const ItemListContainer= ()=>{
    const [datos,setDatos]=useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        customFetch(2000, products)
        .then((response)=> setDatos(response))
        .catch((err)=>console.log(err))
        .finally(()=> setLoading(false))
    },[])

return(
    <>
    {loading ? <h1 className="cargando">Cargando...</h1> : <ItemList items={datos} />}
    </>
);
}
export default ItemListContainer;