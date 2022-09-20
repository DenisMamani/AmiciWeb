import ITemCount from "./ItemCount";
import { Link } from "react-router-dom";
const Item=({product})=>{
  const onAdd=(cantidadProducto)=>{
    alert(`Seleccionaste ${cantidadProducto} unidades`)
  }
    return(
       <div>
        <div className="cardProducto">
        <img src={product.img} className="productImg" alt="producto" />
        <div className="descProduct">
        <h5 className="titleProduct">{product.title}</h5>
          <p className="priceProduct">Precio: ${product.price} </p>
          <p className="stock">Cantidad Disponible: {product.stock}</p>
          <Link to={"/item/"+ product.id} className="btnDetalles">Ver detalles</Link>
          <ITemCount initial={1} stock={product.stock} onAdd={onAdd}/>
        </div>
      </div>
       </div> 
    )
}
export default Item;