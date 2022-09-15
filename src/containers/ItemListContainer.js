import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import getList from "../utils/getProducts";
const ItemListContainer= ()=>{
    const [arrayList,setArrayList]=useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        getList()
        .then((response)=> setArrayList(response))
        .catch((err)=>console.log(err))
        .finally(()=> setLoading(false))
    },[])

return(
    <>
    {loading ? <h1 className="cargando">Cargando...</h1> : <ItemList products={arrayList} />}
    </>
);
}
export default ItemListContainer;