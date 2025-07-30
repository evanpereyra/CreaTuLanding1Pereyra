import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav >
      <h1>Tienda</h1>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};


export default NavBar;
