
type Props = {};

function Login({}: Props) {
  return (
    <div className="mx-12 flex flex-col gap-10 lg:flex-row">
      <div className="card rounded-box grid flex-grow  place-items-center bg-red-100">
        <img className="w-96" src="/login_img.svg" alt="" />
      </div>
      <div className="card rounded-box grid font-Poppins flex-grow place-items-center pb-60 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 py-12">
        <div className="form-control w-full max-w-xs">
            <h2 className="text-3xl text-white font-Poppins font-bold text-center mb-7 ">Iniciar Sesión</h2>
          <label className="label">
            <span className="label-text text-white">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input-bordered input w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input-bordered input w-full max-w-xs mb-10"
          />
          <button className="btn btn-primary" onClick={()=>location.href='/feed'} >Iniciar sesion</button>
          <label className="label ">
            <a className="text-center w-full text-sm hover:!text-white hover:cursor-pointer hover:underline text-white">
              Olvidaste tu contraseña?
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;
