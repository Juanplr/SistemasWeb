import React from "react";

function Button2({ handleLoginClick }) {
  return (
    <>
    <div className="navbar bg-navfoot flex justify-around">
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(4)}
      >
        Registrar Productos
      </button>
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(5)}
      >
        Tus Productos
      </button>
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(3)}
      >
        Productos
      </button>
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(6)}
      >
        Cerrar Sesión
      </button>
    </div>
    </>
  );
}

export default Button2;