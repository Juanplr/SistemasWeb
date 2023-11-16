function LoginVendedor() {
  return (
    <div>
      <div className="hero h-screen bg-white">
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Correo</span>
                </label>
                <input
                  type="email"
                  placeholder="Correo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  <a href="/registroProducto">{"Registrarse"}</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginVendedor;
