import Item from "./Item";
const ItemList=({items})=>{
    return(
        <div className="ordenarProducts">
        {items.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    )
}
export default ItemList;