import ITemCount from "./ItemCount";
const ItemListContainer= (props)=>{
return(
    <>
    <p className="mensaje">{props.greeting}</p>
    <ITemCount/>
    </>
);
}
export default ItemListContainer;