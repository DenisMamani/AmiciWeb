
import { Link } from "react-router-dom";
const Item=({product})=>{
    return(
       <div>
        <div className="cardProducto">
        <img src={product.img} className="productImg" alt="producto" />
        <div className="descProduct">
        <h5 className="titleProduct">{product.title}</h5>
          <p className="priceProduct">Precio: ${product.price} </p>
          <p className="stock">Cantidad Disponible: {product.stock}</p>
          <Link to={"/item/"+ product.id}> <button className="btnDetalles">Ver detalles</button></Link>
        </div>
      </div>
       </div> 
    ) 
}
export default Item;