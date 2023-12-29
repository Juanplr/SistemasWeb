function Button({ handleLoginClick }) {
  return (
    <div className="navbar bg-navfoot flex flex-row justify-around py-5 md:py-0 w-full">
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
  );
}

export default Button;
