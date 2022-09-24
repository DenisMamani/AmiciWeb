import React, { useContext } from 'react';
import { cartContext } from './CartContext';

const CartItem = ({ prod }) => {

  const { removeItem } = useContext(cartContext);

  return (
      <div className='productsCart'>
        <h3 className='titleProductCart'>{prod.item.title}</h3>
        <p className='cantProductCart'>cantidad: {prod.count}</p> 
        <button className='btnEliminarItem' onClick={() => removeItem(prod.item.id)}>Eliminar</button>
      </div>
  )
};

export default CartItem;