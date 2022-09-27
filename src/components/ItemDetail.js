import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    const {addToCart,isInCart,removeItem} =useContext(cartContext)
    const onAdd =(count)=>{
           alert(`Agregaste ${count} unidad/es.`);
            addToCart(item,count)
    }
    return (
        <div className='detailContainer'>
            <img src={item.img} alt="producto" className='productDetail' />
            <div className='detailProduct'>
                <h1 className='textDetail title'>{item.title}</h1>
                <h4 className='textDetail price'>${item.price}</h4>
                <p className='textDetail description'>{item.description}</p>
                {isInCart(item.id)? 
                <div>
                    <p className='textoCarritoItem'>
                        Ya en el carrito!
                    </p>
                    <button className='deleteCartDetail' onClick={()=>removeItem(item.id)}>Eliminar del Carrito</button>
                </div>
                :
                <p className='textoCarritoItem'>Añadir Ahora!</p>    
            }
                {   (isInCart(item.id)) ?
                    <Link to='/cart'><button className='verificar'>Ir al carrito</button></Link>
                    :<ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount>
                }
            </div>
        </div>
    );
}
export default ItemDetail;