import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContextComponent'
import { Link } from 'react-router-dom'

export default function Cart() {
const { cart, totalCount, totalToPay, deleteFromCart } = useContext(cartContext)
  
  return (
    <>
      {cart.map((item) => ( 
        <div key={item.id}>
          {item.name + " " + item.count}{" "}
          <span onClick={() => deleteFromCart(item.id)}>🗑️</span>
        </div> 
      ))}
        <div>
          Tenes el en carro: {totalCount} el total a pagar es: {totalToPay}
        </div>
        <Link to="/checkout">Terminar compra</Link>
    </>
  )
}
