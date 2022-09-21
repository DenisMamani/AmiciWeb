import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    const [goToCart,setGoToCart]=useState(0)
    const onAdd=(cantidadProducto)=>{
        alert(`Seleccionaste ${cantidadProducto} unidades`)
        setGoToCart(cantidadProducto)
      }
    return (
        <div className='detailContainer'>
            <img src={item.img} alt="producto" className='productDetail' />
            <div className='detailProduct'>
                <h1 className='textDetail title'>{item.title}</h1>
                <h4 className='textDetail price'>${item.price}</h4>
                <p className='textDetail description'>{item.description}</p>
                {   goToCart===0 ?
                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount>
                    : <Link to='/cart'><button className='verificar'>Verificar</button></Link>
                }
            </div>
        </div>
    );
}
export default ItemDetail;