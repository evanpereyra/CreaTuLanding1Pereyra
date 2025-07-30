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

/*
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px 20px'
  },
  logo: {
    margin: 0
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
};
*/
export default NavBar;
