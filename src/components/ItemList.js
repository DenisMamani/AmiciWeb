import Item from "./Item";
const ItemList=({items})=>{
    return(
        <>
        {items.map((product)=><Item key={product.id} product={product}/>)}
        </>
    )
}
export default ItemList;