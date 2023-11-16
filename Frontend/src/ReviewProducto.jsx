function ReviewProducto() {
  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center">
        <div className="bg-gray-300 w-3/4 md:w-2/5 rounded-xl mt-24">
          <h1 className="text-2xl md:text-3xl text-center m-5 text-black">
            ¿Qué te pareció el servicio?
          </h1>
          <div className="flex flex-col items-center">
            <textarea
              placeholder="Escribe un comentario"
              className="textarea textarea-bordered textarea-lg w-4/5 max-w-xs md:max-w-md h-40 md:h-54 m-5"
            ></textarea>
            <button className="btn bg-boton text-white mb-5">
              <a href="/productos">{"Enviar reseña"}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewProducto;
