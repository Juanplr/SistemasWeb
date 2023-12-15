import React, { useState} from "react";
import axios from "axios";

function RegistroProducto({idU}) {
  const [Cargando, setCargando] = useState(false);
  const [productos, setProductos] = useState({
    id: 0,
    nombreProducto: "",
    precio: 0.00,
    cantidad: 0,
    imagen: "",
    idUsuario:idU
  });

  const limpiar = () => {
    setProductos((prev) => ({
      id: 0,
      nombreProducto: "",
      precio: 0.00,
      cantidad: 0,
      imagen: "",
    }));
  };

  const hacerPeticion = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4567/producto",
        productos
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };


  const procesarFormulario = async (e) => {
    e.preventDefault();
    setCargando(true);
    try {
      const res = await hacerPeticion();
      setCargando(false);
      if (res.msj) {
        alert("Producto Registrado Correctamente");
        limpiar();
      } else {
        alert("Error Producto No registrado");
      }
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  const cambiosProducto= (e) => {
    const { name, value } = e.target;
    setProductos({
      ...productos,
      [name]: value,
    });
  };

  return (
    <div className="bg-white flex justify-center">
      <div className="bg-gray-300 px-5 rounded-xl w-full max-w-sm shadow-2xl m-9">
        <h1 className="text-center text-black text-2xl md:text-3xl m-5">
          Registra tu producto
        </h1>
        <div className="flex flex-col items-center mb-10">
          <input
            type="text"
            placeholder="Nombre del Producto"
            className="input input-bordered w-full max-w-sm mb-2"
            onChange={cambiosProducto}
            name="nombreProducto"
          />
          <div className="flex flex-col md:flex-row w-full max-w-sm">
            <input
              type="number"
              placeholder="Precio"
              className="input input-bordered md:w-72 mb-2 mr-1"
              onChange={cambiosProducto}
              name="precio"
            />
            <input
              type="number"
              placeholder="Cantidad"
              className="input input-bordered md:w-20 mb-2"
              onChange={cambiosProducto}
              name="cantidad"
            />
          </div>
          <span className="label-text text-black">Imagen</span>
          <input
            type="text"
            placeholder="Imagen"
            className="input input-bordered w-full max-w-sm mb-2"
            onChange={cambiosProducto}
            name="imagen"
          />
          <button type="submit" className="btn bg-boton text-white"  disabled={Cargando} onClick={procesarFormulario}>
            Registrar Producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistroProducto;
