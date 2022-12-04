import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { useState } from 'react'
import { cartContext } from './CartContextComponent';
import { Link } from 'react-router-dom';


export default function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const [removeButton, setRemoveButton] = useState(false);
    const { cart, addToCart } = useContext(cartContext);
    function sum(){
        if (count < product.stock) {  
        setCount(count + 1)
        }
    }

    function res(){
        if (count >= 2){
            setCount(count - 1)
        }
        
    }

    function onAdd() {
        addToCart(product, count);
        setRemoveButton(true);
    }

    useEffect(() => {
        console.log(cart)
    },[cart]);
    return (
    <div>
        <span style={{ cursor: "pointer"}} onClick={sum}>+</span>
        {count}
        <span style={{ cursor: "pointer"}} onClick={res}>-</span>
        <br />
        {removeButton ? ( 
            <> 
                Producto agregado... 
                <Link to="/" type="button" className="btn btn-secondary">Seguir comprando...</Link>
                <Link to="/checkout" type="button" className="btn btn-secondary">Terminar Compra</Link>
            </>
            ) : (
            
            <button onClick={onAdd}>Agregar al carro</button>
            )}
    </div>
  )
}
