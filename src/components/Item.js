import ITemCount from "./ItemCount";
const Item=({product})=>{
    return(
       <div>
        <div className="cardProducto">
        <img src={product.img} className="productImg" alt="producto" />
        <div className="descProduct">
        <h5 className="titleProduct">{product.title}</h5>
          <p className="priceProduct">Precio: ${product.price} </p>
          <p className="stock">Cantidad Disponible: {product.stock}</p>
          <button className="btnDetalles">Ver detalles</button>
          <ITemCount/>
          <button className="btnGuardar">Guardar en el carrito</button>
        </div>
      </div>
       </div> 
    )
}
export default Item;