import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos } from "../metodos/async";

function ProductList() {
  const [productos, setProductos] = useState([]);
    useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <div className="productos-grid">
        {productos.map((prod) => (
          <article key={prod.id}>
            <Link to={`/productos/${prod.id}`} className="producto-link">
              <img src={prod.image} alt={prod.title} />
              <h1>{prod.title}</h1>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
