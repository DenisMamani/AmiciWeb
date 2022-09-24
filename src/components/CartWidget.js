import {IoMdCart} from 'react-icons/io';
import { Link } from 'react-router-dom';
const CartWidget=()=>{
    return(
        <>
        <Link to="/cart"><IoMdCart className='logoCarrito'/></Link>
        </>
    );
}
export default CartWidget;