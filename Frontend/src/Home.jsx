import React, { useState } from "react";
import "./Home.css";
import Productos from "./Productos.jsx";
import LoginVendedor from "./LoginVendedor.jsx";
import Button from "./button.jsx";
import Log from "./log.jsx";
import RegistroProducto from "./RegistroProducto.jsx";
import Button2 from "./button2.jsx";
import TusProductos from "./tusProductos.jsx";
//Modulo principal donde se mostraran las diferentes interfaces
function Home() {

  //Datos del usuario para usarlo en las consultas del Backend
  const [usuario, setUsuario] = useState({
    id: 0,
    nombreUsuario: "",
    nombre: "",
    password: "",
    telefono: "",
  });
  //Datos para mostrar diferentes modulos
  const [showComponents, setShowComponents] = useState({
    login: false,
    productos: true,
    log: false,
    rProducto: false,
    tProductos: false
  });
  //Datos para mostrar la barra de botones de pendiendo del usuario
  const [verBotones, setVerBotones] = useState({
    usuarioSinRegistro: true,
    usuarioRegistrado: false
  });
  //funcion para cambiar entre modulos(interfaces) y barra de botones
  const handleLoginClick = (value) => {
    switch (value) {
      case 1:
        setShowComponents((prev) => ({
          login: true,
          productos: false,
          log : false,
          rProducto: false,
          tProductos: false
        }));
        break;
      case 2:
        setShowComponents((prev) => ({
          login: false,
          productos: false,
          log : true,
          rProducto: false,
          tProductos: false
        }));
        break;
      case 3:
        setShowComponents((prev) => ({
          login: false,
          productos: true,
          log : false,
          rProducto: false,
          tProductos: false
        }));
        break;
      case 4:
        setShowComponents((prev) => ({
          login: false,
          productos: false,
          log : false,
          rProducto: true,
          tProductos: false
        }));
        break;
      case 5:
          setShowComponents((prev) => ({
            login: false,
            productos: false,
            log : false,
            rProducto: false,
            tProductos: true
          }));
          break;
      case 6:
            setShowComponents((prev) => ({
              login: false,
              productos: true,
              log : false,
              rProducto: false,
              tProductos: false
            }));
            setUsuario((prev) => ({
              id: 0,
              nombreUsuario: "",
              nombre: "",
              password: "",
              telefono: "",
            }));
            setVerBotones((prev) => ({
              usuarioSinRegistro: true,
              usuarioRegistrado: false
            }));
          break;
      default:
        break;
    }
  };
  //interfaz HTML principal
  return (
    <>
      <div>
      {verBotones.usuarioSinRegistro && (<Button handleLoginClick={handleLoginClick} />)}
      {verBotones.usuarioRegistrado && (<Button2 handleLoginClick={handleLoginClick} />)}
      </div>
      <div>
        {showComponents.login && (
          <React.StrictMode>
            <LoginVendedor />
          </React.StrictMode>
        )}
        {showComponents.productos && (
          <React.StrictMode>
            <Productos />
          </React.StrictMode>
        )}
        {showComponents.log && (
          <React.StrictMode>
            <Log usuario={usuario} setUsuario={setUsuario} handleLoginClick={handleLoginClick} setVerBotones={setVerBotones} />
          </React.StrictMode>
        )}
        {showComponents.rProducto && (
          <React.StrictMode>
            <RegistroProducto idU={usuario.id} />
          </React.StrictMode>
        )}
        {showComponents.tProductos && (
          <React.StrictMode>
            <TusProductos usuario={usuario} />
          </React.StrictMode>
        )}
      </div>
    </>
  );
}

export default Home;