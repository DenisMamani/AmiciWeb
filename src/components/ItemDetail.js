import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    const onAdd=(cantidadProducto)=>{
        alert(`Seleccionaste ${cantidadProducto} unidades`)
      }
    return (
        <div className='containerItem'>
            <img src={item.img} alt="producto" className='productDetail' />
            <div className='detailProduct'>
                <h1 className='textDetail title'>{item.title}</h1>
                <h4 className='textDetail price'>${item.price}</h4>
                <p className='textDetail description'>{item.description}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount>
            </div>
        </div>
    );
}
export default ItemDetail;