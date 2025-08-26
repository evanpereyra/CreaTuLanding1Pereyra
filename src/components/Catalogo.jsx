import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos, getCategorias, getProductosPorCategoria } from "../metodos/async";

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  useEffect(() => {
    cargarProductos();
  }, [categoriaSeleccionada]);

  const cargarDatos = async () => {
    try {
      const [productosData, categoriasData] = await Promise.all([
        getProductos(),
        getCategorias()
      ]);
      setProductos(productosData);
      setCategorias(categoriasData);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setLoading(false);
    }
  };

  const cargarProductos = async () => {
    setLoading(true);
    try {
      if (categoriaSeleccionada === "todos") {
        const productosData = await getProductos();
        setProductos(productosData);
      } else {
        const productosData = await getProductosPorCategoria(categoriaSeleccionada);
        setProductos(productosData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setLoading(false);
    }
  };

  const getEmojiCategoria = (categoria) => {
    const emojis = {
      "men's clothing": "👔",
      "women's clothing": "👗",
      "jewelery": "💍",
      "electronics": "⚡"
    };
    return emojis[categoria] || "📦";
  };

  const getNombreCategoria = (categoria) => {
    const nombres = {
      "men's clothing": "Ropa Masculina",
      "women's clothing": "Ropa Femenina",
      "jewelery": "Joyería",
      "electronics": "Electrónicos"
    };
    return nombres[categoria] || categoria;
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Cargando catálogo...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Catálogo de Productos</h2>
      
      {/* Filtros de categorías */}
      <div className="filtros-categoria">
        <button
          className={`filtro-btn ${categoriaSeleccionada === "todos" ? "activo" : ""}`}
          onClick={() => setCategoriaSeleccionada("todos")}
        >
          🛍️ Todos los Productos
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`filtro-btn ${categoriaSeleccionada === categoria ? "activo" : ""}`}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {getEmojiCategoria(categoria)} {getNombreCategoria(categoria)}
          </button>
        ))}
      </div>

      {/* Información de productos */}
      <div className="info-productos">
        <p>
          Mostrando {productos.length} productos
          {categoriaSeleccionada !== "todos" && ` en ${getNombreCategoria(categoriaSeleccionada)}`}
        </p>
      </div>

      {/* Grid de productos */}
      <div className="productos-grid">
        {productos.map((prod) => (
          <article key={prod.id}>
            <Link to={`/productos/${prod.id}`} className="producto-link">
              <img src={prod.image} alt={prod.title} />
              <h1>{prod.title}</h1>
              <p className="precio">${prod.price}</p>
              <p className="categoria">
                {getEmojiCategoria(prod.category)} {getNombreCategoria(prod.category)}
              </p>
            </Link>
          </article>
        ))}
      </div>

      {productos.length === 0 && (
        <div className="sin-productos">
          <h3>No se encontraron productos en esta categoría</h3>
          <p>Intenta seleccionar otra categoría o vuelve a "Todos los Productos"</p>
        </div>
      )}
    </div>
  );
}

export default Catalogo; 