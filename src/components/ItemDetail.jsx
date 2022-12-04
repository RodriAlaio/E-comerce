import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({ product }) {
  return (
    <div>
            <h1>name: {product.name}</h1>
            <img style={{heigth: "200px"}} src={product.img} alt={product.name} />
            <p>stock: {product.stock}</p>
            <p>price: {product.price}</p>
            <ItemCount product={product}/>
    </div>
  )
}
