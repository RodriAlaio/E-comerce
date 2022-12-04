import React, { useContext } from 'react'
import { useState } from 'react'
import { cartContext } from './CartContextComponent';
import { addDoc ,collection, getFirestore } from "firebase/firestore";


export default function CheckOut() {
  
  const{totalToPay, cart, deleteAllFromCart} = useContext(cartContext)
  const[name, setName] = useState("");
  const[tel, setTel] = useState("");
  const[email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  function validateForm() {
    const order = {
      buyer: {name, tel, email},
      totalToPay,
      cart,
    };

    const db = getFirestore();
    const orders = collection(db, "orders")
    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      deleteAllFromCart(id)
    })
  }

  if (cart.length == 0){
    return(<>No hay nada para pagar...</>)
  }
  return (
    <>
    {orderId? "Gracias por tu compra, tu id de compra es :" + orderId :
    <div>
      <h1>Terminar compra, ingrese datos</h1>
      <input type="text" placeholder='nombre' onChange={(e)=>setName(e.target.value)}/> <br />
      <input type="tel" placeholder='telefono' onChange={(e)=>setTel(e.target.value)}/> <br />
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br /> <br />
      <button onClick={validateForm} type="button" className="btn btn-secondary">Finalizar compra</button>
    </div>
    }
    </>
  )
}
