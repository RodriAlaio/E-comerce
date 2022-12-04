import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ product }) {
  return (
    <>
    
      <div className="col-md-3 py-4"> 
        <div className="card">
          <Link to ={"/item/" + product.id}> 
            <div>
                <p>id: {product.id}</p>
                <p className="card-title"> name: {product.name}</p>
                <div className="card-body">
                  <p className="card-text" >price: {product.price}</p>
                  <p className="card-text" >stock: {product.stock}</p>
                </div>
                <img className="card-img-top" src={product.img} alt={product.name} />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

// style={{height: "350px"}}

{/* <div className="col-md-4 py-3">
            <div className="card">
                <img src={imagen} className="card-img-top" alt="..."/>
                <h5 className="card-title">{nombre}</h5>
                <div className="card-body">
                    <p className="card-text">${precio}</p>
                </div>
            </div>
        </div> */}