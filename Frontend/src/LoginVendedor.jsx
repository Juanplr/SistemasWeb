import React, { useState } from "react";
import axios from "axios";

function LoginVendedor() {
  const [Cargando, setCargando] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({
    id: 0,
    nombreUsuario: "",
    nombre: "",
    password: "",
    telefono: "",
    imagen: "",
  });
  const limpiar = () => {
    setDatosUsuario((prev) => ({
      id: 0,
      nombreUsuario: "",
      nombre: "",
      password: "",
      telefono: "",
      imagen: "",
    }));
  };
  const hacerPeticion = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4567/usuarios",
        datosUsuario
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
        alert("Usuario Registrado");
        limpiar();
      } else {
        alert("Error Usuario No registrado");
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
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
          <div className="card-body">
            <h1 className="text-black text-2xl">Registrate como vendedor</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="input input-bordered"
                onChange={cambiosUsuario}
                name="nombre"
                value={datosUsuario.nombre}
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Telefono</span>
              </label>
              <input
                type="tel"
                placeholder="Telefono"
                className="input input-bordered"
                onChange={cambiosUsuario}
                name="telefono"
                value={datosUsuario.telefono}
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

export default LoginVendedor;
