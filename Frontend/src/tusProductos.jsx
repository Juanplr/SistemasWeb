import React, { useState, useEffect } from "react";
import axios from "axios";

function TusProductos({ usuario }) {
  const [productosData, setProductosData] = useState([]);

  const mapear =()=>{
    return(
      productosData.map((producto) => (
      <Picture key={producto.id} {...producto} />
      ))
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:4567/productoUE", usuario);
        setProductosData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [usuario]);

  const Picture = ({ id, nombreProducto, precio, cantidad, imagen, ubicacion }) => {
    const [productoActual, setProductoActual] = useState({
      id,
      nombreProducto,
      precio,
      cantidad,
      imagen,
      ubicacion,
      idUsuario: usuario.id
    });  
    const hacerPeticion = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4567/editarProducto",
          productoActual
        );
        return res.data;
      } catch (error) {
        throw error;
      }
    };

    const procesarFormulario = async (e) => {
      e.preventDefault();
  
      try {
        const res = await hacerPeticion();
        console.log(res);
  
        if (res.existe) {
          alert("¡Produto actualizado! ");
        } else {
          alert("Error Produto No actualizado");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const peticionPublicar = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4567/publicarProducto",
          productoActual
        );
        return res.data;
      } catch (error) {
        throw error;
      }
    };

    const publicar = async (e) => {
      e.preventDefault();
  
      try {
        const res = await peticionPublicar();
        console.log(res);
  
        if (res.existe) {
          alert("¡Produto Publicado! ");
        } else {
          alert("Error Produto No Publicado");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const peticionQPublicar = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4567/QpublicarProducto",
          productoActual
        );
        return res.data;
      } catch (error) {
        throw error;
      }
    };

    const quitarPublicar = async (e) => {
      e.preventDefault();
  
      try {
        const res = await peticionQPublicar();
        console.log(res);
  
        if (res.existe) {
          alert("¡Produto Quitado! ");
        } else {
          alert("Error Produto No actualizado");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const peticionE = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4567/eliminarProducto",
          productoActual
        );
        return res.data;
      } catch (error) {
        throw error;
      }
    };

    const eliminarP = async (e) => {
      e.preventDefault();
  
      try {
        const res = await peticionE();
        console.log(res);
  
        if (res.existe) {
          alert("¡Produto Eliminado! ");
        } else {
          alert("Error Produto No Eliminado");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <a key={id}>
        <div className="text-black">
          <div className="card w-96 shadow-xl m-5 bg-cardFood pt-5">
            <figure>
              <img src={imagen} alt={nombreProducto} className="w-60 h-60" />
            </figure>
            <div className="card-body flex text-center">
              <h3 className="card-title">Nombre Del Producto</h3>
              <input
                className="input input-bordered"
                type="text"
                value={productoActual.nombreProducto}
                onChange={(e) => setProductoActual({ ...productoActual, nombreProducto: e.target.value })}
              />
              <h3 className="card-title">Precio $</h3>
              <input
                className="input input-bordered"
                type="text"
                value={productoActual.precio}
                onChange={(e) => setProductoActual({ ...productoActual, precio: e.target.value })}
              />
              <h3 className="card-title">Cantidad de Productos</h3>
              <input
                className="input input-bordered"
                type="text"
                value={productoActual.cantidad}
                onChange={(e) => setProductoActual({ ...productoActual, cantidad: e.target.value })}
              />
              <h3 className="card-title">Imagen</h3>
              <input
                className="input input-bordered"
                type="text"
                value={productoActual.imagen}
                onChange={(e) => setProductoActual({ ...productoActual, imagen: e.target.value })}
              />
              <h3 className="card-title">Ubicacion</h3>
              <input
                className="input input-bordered"
                type="text"
                value={productoActual.ubicacion}
                onChange={(e) => setProductoActual({ ...productoActual, ubicacion: e.target.value })}
              />
              <button className="btn btn-primary" type="submit" onClick={procesarFormulario}>
                Editar
              </button>
              <button className="btn btn-primary" type="submit" onClick={publicar}>
                Publicar
              </button>
              <button className="btn btn-primary" type="submit" onClick={quitarPublicar}>
                Quitar Publicación
              </button>
              <button className="btn btn-primary" type="submit" onClick={eliminarP}>
                Eliminar
              </button>
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
            {mapear()}
        </div>
      </div>
    </>
  );
}

export default TusProductos;