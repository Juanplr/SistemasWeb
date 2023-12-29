import { useState, useEffect } from "react";
import axios from "axios";
//Ver productos en la venta
function Productos() {
  const [productosData, setProductosData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4567/producto");
        setProductosData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const Picture = (parametros) => {
    const id = parametros.id;
    const nombre = parametros.nombreProducto;
    const precio = parametros.precio;
    const cantidad = parametros.cantidad;
    const url = parametros.imagen;
    const ubicacion = parametros.ubicacion;

    return (
      <a>
        <div className="text-black" key={id}>
          <div className="card w-96 shadow-xl m-5 bg-cardFood pt-5">
            <figure>
              <img src={url} alt={nombre} className="w-60 h-60" />
            </figure>
            <div className="card-body flex text-center">
              <h1 className="card-title">{nombre}</h1>
              <h2 className="card-title">${precio}</h2>
              <h2 className="card-title">{cantidad}</h2>
              <h2 className="card-title">{ubicacion}</h2>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-wrap justify-center bg-white">
          {productosData.map((producto) => (
            <Picture key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Productos;
