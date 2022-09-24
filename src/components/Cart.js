import { useContext } from "react"
import { cartContext } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from './CartItem';
const Cart=()=>{
    const {cart,clearCart}=useContext(cartContext)
    return(
        <>
         {cart.length === 0 ?
        <div className="cartVacio">
        <p className="home">Carrito Vacio</p>
          <Link className="home" to='/'>ir a Inicio</Link>
        </div>
        :
        <div className="ordenarCartItem">
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
          <button className="btnEliminarTodo" onClick={() => clearCart()}>Eliminar Todo</button>
        </div>
      }
        </>
    )
}
export default Cart;