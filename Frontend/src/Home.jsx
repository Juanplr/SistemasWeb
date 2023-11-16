import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-white h-screen">
        <button className="btn btn-sm bg-boton text-white text-sm ml-24 mt-5">
          Registrate
        </button>
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Busca la comida de tu agrado"
            className="input input-bordered w-3/4 md:max-w-lg my-20 bg-gray-300 placeholder-gray-800 text-black mr-1"
          />
          <div className="bg-gray-300 w-8 h-8"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
