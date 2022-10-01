import { useContext } from "react"
import { cartContext } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from './CartItem';
import { increment, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../utils/FireBase";
import Swal from "sweetalert2";
const Cart=()=>{
    const {cart,clearCart,totalProductsPrice}=useContext(cartContext)
    let test = {cart,clearCart,totalProductsPrice}
    const createOrder = async()=>{
      let itemsDB= cart.map(product =>({
       id: product.item.id,
       price: product.item.price,
       title:product.item.title,
       quantity: product.count
      }))
      let order ={
        buyer:{
          name:"Denis",
          email:"mamanidenis51@gmail.com",
          phone: "1138430377"
        },
        date: serverTimestamp(),
        items: itemsDB,
        total: totalProductsPrice()
      }
      const newOrderRef = doc(collection(db,"orders"))
      await setDoc(newOrderRef, order);
      cart.forEach(async (item) => {
        const itemRef = doc(db, "products", item.item.id);
      await updateDoc(itemRef, {
        stock:increment(-item.count)
      });
      });
      test.clearCart()
      Swal.fire({
        icon: 'success',
        title: 'Compra Finalizada!',
        text: 'Gracias por su compra!',
        background: '#262525',
        color: 'white',
      })
    }
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
          <p className="totalPrecio">Total: ${totalProductsPrice()}</p>
          <button className="btnEliminarTodo" onClick={() => clearCart()}>Eliminar Todo</button>
          <button className="btnConfirmar" onClick={createOrder} >Confirmar</button>
        </div>
      }
        </>
    )
}
export default Cart;