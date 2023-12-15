import React from "react";

function Button({ handleLoginClick }) {
  return (
    <>
    <div className="navbar bg-navfoot flex justify-around">
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(1)}
      >
        Registrate
      </button>
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(2)}
      >
        Iniciar Sesión
      </button>
      <button
        type="button"
        className="btn btn-sm bg-boton text-white text-sm"
        onClick={() => handleLoginClick(3)}
      >
        Productos
      </button>
    </div>
    </>
  );
}

export default Button;