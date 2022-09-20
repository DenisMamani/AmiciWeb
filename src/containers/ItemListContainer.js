import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import customFetch from "../utils/customFetch";
import products from "../utils/products";
const ItemListContainer= ()=>{
    const [datos,setDatos]=useState([]);
    const [loading,setLoading] = useState(false);
    const { id }= useParams();
    useEffect(()=>{
        setLoading(true);
        if(id){
            customFetch(2000, products.filter(item=>item.categoryId== id))
            .then((response)=> setDatos(response))
            .catch((err)=>console.log(err))
            .finally(()=> setLoading(false))
        }
        else{
            customFetch(2000, products)
            .then((response)=> setDatos(response))
            .catch((err)=>console.log(err))
            .finally(()=> setLoading(false))
        }
    },[id])

return(
    <>
    {loading ? <h1 className="cargando">Cargando...</h1> : <ItemList items={datos} />}
    </>
);
}
export default ItemListContainer;