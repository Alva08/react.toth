import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'



function ItemDetail({item}) {
  return (
    <div className='itemContainer' >
        <div className='itemDetail-img'>
            <img src={item?.img} alt="imagen producto"/>
        </div>
        <div className='itemDetail'>
            <h2>{item?.nombre}</h2>
            <h3>${item?.precio}</h3>
            <p>Detalle del producto</p>
            {<ItemCount item={item} stock = {item.stock} initial = {1}/>}
        </div>
    </div>
  )
}

export default ItemDetail;