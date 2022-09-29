import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { collection, getDocs,query,where } from "firebase/firestore";
import { db } from "../utils/FireBase";
const ItemListContainer= ()=>{
    const [datos,setDatos]=useState([]);
    const [loading,setLoading] = useState(false);
    const { id }= useParams();
    useEffect(()=>{
        setLoading(true);
        const fireStoreFetech=async()=>{
            let q
            if (id){
                q= query(collection(db, "products"), where('categoryId', '==', parseInt(id)))
            }
            else{
                q= collection(db, "products")
            }
            const querySnapshot = await getDocs(q);
            const dataFormFireStore = querySnapshot.docs.map(document=>({
                id:document.id,
                ...document.data()
            }))
            return dataFormFireStore
        }
        fireStoreFetech()
        .then (result=> setDatos(result))
        .catch((err)=>console.log(err))
        .finally(()=> setLoading(false))
    },[id]);
    useEffect(()=>{
        return(()=>{
            setDatos([]);
        })
    },[]);
return(
    <>
    {loading ? <h1 className="cargando">Cargando...</h1> : <ItemList items={datos} />}
    </>
);
}
export default ItemListContainer;