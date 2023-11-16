function registroProducto() {
  return (
    <div className="bg-white flex justify-center">
      <div className="bg-gray-300 px-5 rounded-xl w-full max-w-sm shadow-2xl m-9">
        <h1 className="text-center text-black text-2xl md:text-3xl m-5">
          Registra tu producto
        </h1>
        <div className="flex flex-col items-center mb-10">
          <input
            type="text"
            placeholder="Título"
            className="input input-bordered w-full max-w-sm mb-2"
          />
          <div className="flex flex-col md:flex-row w-full max-w-sm">
            <input
              type="text"
              placeholder="Productos"
              className="input input-bordered md:w-72 mb-2 mr-1"
            />
            <input
              type="text"
              placeholder="Precio"
              className="input input-bordered md:w-20 mb-2"
            />
          </div>
          <input
            type="text"
            placeholder="Ubicación"
            className="input input-bordered w-full max-w-sm mb-2"
          />
          <textarea
            placeholder="Descripción opcional"
            className="textarea textarea-bordered textarea-lg w-full max-w-sm mb-4"
          ></textarea>
          <button className="btn bg-boton text-white">
            <a href="/productos">{"Registrar producto"}</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default registroProducto;
