import { useContext } from 'react';
import {IoMdCart} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { cartContext } from './CartContext';
const CartWidget=()=>{
    const{cantInCart}=useContext(cartContext)
    return(
        <>
        <Link to="/cart"><IoMdCart className='logoCarrito'/></Link>{
            (cantInCart() !==0) && <span className='contadorCart'>{cantInCart()}</span>
        }
        </>
    );
}
export default CartWidget;