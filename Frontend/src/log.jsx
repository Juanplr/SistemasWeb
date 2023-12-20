import React, { useState } from "react";
import axios from "axios";

//modulo de inicio de sesión de un Usuario
function Log({ usuario, setUsuario, handleLoginClick, setVerBotones }) {
  const [Cargando, setCargando] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({
    nombreUsuario: "",
    password: "",
  });

  const limpiar = () => {
    setDatosUsuario((prev) => ({
      nombreUsuario: "",
      password: "",
    }));
  };
  //peticion al Backend para ver si el usuario existe en la BD
  const hacerPeticion = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4567/usuarioValido",
        datosUsuario
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  //peticion al Backend para regresar el usuario Iniciado
  const obtenerUsuario = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4567/usuarioIniciado",
        datosUsuario
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  //prosesamiento de Uusario.
  const procesarFormulario = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const res = await hacerPeticion();
      setCargando(false);

      if (res.existe) {
        const aux = await obtenerUsuario();
        setUsuario({
          id: aux.id,
          nombreUsuario: aux.nombreUsuario,
          nombre: aux.nombre,
          password: aux.password,
          telefono: aux.telefono,
        });
        alert("¡Bienvenido! " + aux.nombre);
        limpiar();
        handleLoginClick(4);
        setVerBotones({
          usuarioSinRegistro: false,
          usuarioRegistrado: true,
        });
      } else {
        alert("Usuario No encontrado");
      }
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  const cambiosUsuario = (e) => {
    const { name, value } = e.target;
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  return (
    <div className="hero h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
          <div className="card-body">
            <h1 className="text-black text-2xl text-center">Inicia Sesión</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Nombre De Usuario</span>
              </label>
              <input
                type="text"
                placeholder="Nombre De Usuario"
                className="input input-bordered"
                onChange={cambiosUsuario}
                name="nombreUsuario"
                value={datosUsuario.nombreUsuario}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                onChange={cambiosUsuario}
                name="password"
                value={datosUsuario.password}
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={Cargando}
                onClick={procesarFormulario}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
