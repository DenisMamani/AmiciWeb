import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/FireBase";
const ItemDetailContainer=()=>{
    const [dato,setDato]=useState({});
    const [loading,setLoading] = useState(false);
    const { id }= useParams();
    useEffect(()=>{
        setLoading (true)
        const getItem = async () => {
            const qSpashot = await getDoc(doc(db, "products", id))
            return {id: id, ...qSpashot.data()}
        }
        getItem()
        .then(result => setDato(result))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    },[id])
    return(
        <>
        {loading ? <h1 className="cargando">Cargando...</h1> : <ItemDetail item={dato} />}
        </>
        );
}
export default ItemDetailContainer;