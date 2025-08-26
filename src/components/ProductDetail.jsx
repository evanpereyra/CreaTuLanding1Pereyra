import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../metodos/async";

function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

    useEffect(() => {
    getProducto(id).then(item =>  setProducto(item));
  }, [id]);


  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="container">
      <article>
        <h2>{producto.title}</h2>
        <img src={producto.image} alt={producto.title}/>
        <p>{producto.description}</p>
        <p><strong>Precio:</strong> ${producto.price}</p>
      </article>
    </div>
  );
}

export default ProductDetail;
