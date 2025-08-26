import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <>
      <BrowserRouter>
       
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a MiTienda!" />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
          </Routes>
      
      </BrowserRouter>

    </>
  );
}

export default App;
