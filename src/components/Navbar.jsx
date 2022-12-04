import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <div>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          
          <Link to="/" className="navbar-brand">Home</Link>
          
          <Link to="/category/camisetas" className="navbar-brand">Camisetas</Link>
          
          <Link to="/category/zapatillas" className="navbar-brand">Zapatillas</Link>
          
          <Link to="/cart" className="navbar-brand">Cart</Link>
          
          <Link to="/checkout" className="navbar-brand">checkout</Link>
          
          <CartWidget />
          </div>
        </nav>
      </div>
    </div>
  )
}
