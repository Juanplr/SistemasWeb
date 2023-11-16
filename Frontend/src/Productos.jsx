const productosData = [
  {
    id: 1,
    titulo: "Tortas",
    productos: "Milanesa",
    precio: 15,
    ubicacion: "Av. Xalapa No. 54",
    descripcion: "Nos encontramos frente a la parada de autobús",
    reviews: [
      {
        id: 1,
        comentario: "Me gustó el servicio",
      },
      {
        id: 2,
        comentario: "Me atendieron rápido",
      },
    ],
  },
  {
    id: 2,
    titulo: "Refrescos",
    productos: "Coca-cola",
    precio: 15,
    ubicacion: "Junto a la cancha",
    descripcion: "Junto al salón F102",
    reviews: [
      {
        id: 1,
        comentario: "Tardaron mucho en atenderme",
      },
      {
        id: 2,
        comentario: "Me gustó el servicio",
      },
    ],
  },
  {
    id: 3,
    titulo: "Café",
    productos: "Americano",
    precio: 20,
    ubicacion: "Afuera del auditorio",
    descripcion: "",
    reviews: [
      {
        id: 1,
        comentario: "Es un buen café",
      },
      {
        id: 2,
        comentario: "Te atienden rápido",
      },
    ],
  },
  {
    id: 1,
    titulo: "Tortas",
    productos: "Milanesa",
    precio: 15,
    ubicacion: "Av. Xalapa No. 54",
    descripcion: "Nos encontramos frente a la parada de autobús",
    reviews: [
      {
        id: 1,
        comentario: "Me gustó el servicio",
      },
      {
        id: 2,
        comentario: "Me atendieron rápido",
      },
    ],
  },
  {
    id: 2,
    titulo: "Refrescos",
    productos: "Coca-cola",
    precio: 15,
    ubicacion: "Junto a la cancha",
    descripcion: "Junto al salón F102",
    reviews: [
      {
        id: 1,
        comentario: "Tardaron mucho en atenderme",
      },
      {
        id: 2,
        comentario: "Me gustó el servicio",
      },
    ],
  },
  {
    id: 3,
    titulo: "Café",
    productos: "Americano",
    precio: 20,
    ubicacion: "Afuera del auditorio",
    descripcion: "",
    reviews: [
      {
        id: 1,
        comentario: "Es un buen café",
      },
      {
        id: 2,
        comentario: "Te atienden rápido",
      },
    ],
  },
];

function Productos() {
  return (
    <div className="md:h-screen">
      <div className="flex flex-wrap justify-center">
        {productosData.map((producto) => {
          return (
            <div
              key={producto.id}
              className="bg-cardFood m-10 p-2 text-black rounded-lg text-center text-md w-2/3 md:w-1/4"
            >
              <h1 className="text-2xl">{producto.titulo}</h1>
              <h2>{producto.productos}</h2>
              <h2>${producto.precio}</h2>
              <h2>{producto.ubicacion}</h2>
              <h2>{producto.descripcion}</h2>
              <div>
                <button className="btn bg-boton text-white text-xs m-1 px-1 mt-2">
                  <a href="/reviewPro">{"Escribe una reseña"}</a>
                </button>
                <label
                  htmlFor="my-modal-3"
                  className="btn bg-boton text-white text-xs m-1 px-1 mt-2"
                >
                  Ver reseñas
                </label>
              </div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative bg-white">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Comentarios</h3>
                  <p className="py-4">
                    {producto.reviews.map((review) => {
                      return (
                        <div key={review.id}>
                          <h2>{review.comentario}</h2>
                        </div>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Productos;
