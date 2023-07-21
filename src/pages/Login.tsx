import {  useNavigate } from "react-router-dom";

import login_img from '/login_img.svg'
import {useState} from 'react'

interface userInfo{
  name: string,
  email: string
}

type Props = {
  setUserInfo:  React.Dispatch<React.SetStateAction<userInfo>>
};



function Login({setUserInfo}: Props) {
  const [divError, setDivError] = useState(false)
  const [erroresLogin, setErroresLogin] = useState('')
  const navigate = useNavigate()

  function validate (name:string, email:string){
    let errores = ''
    console.log(name, email)
    if (!name) {
      errores = "Ingresa un nombre";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
      errores = "El nombre solo puede contener letras y espacios ";
    }

    if (!email) {
      errores = "Ingresa un correo";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      errores =
        "El correo debe ser válido, solo puede contener letras, numeros, puntos y guiones";
    }
    console.log(errores)
    return(errores)
  }

  return (
    <div className="lg:mx-12 flex flex-col gap-10 lg:flex-row">
      <div className="card rounded-box hidden lg:grid flex-grow  place-items-center bg-red-100">
        <img className="w-96" src={login_img} alt="" />
      </div>
      <div className="card rounded-none lg:rounded-box w-full lg:grid flex-grow place-items-center lg:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 py-12 pb-60 font-Poppins">
        <form className="form-control w-10/12 lg:w-full max-w-xs" id="loginForm">
          <h2 className="mb-7 hidden lg:block text-center font-Poppins text-3xl font-bold text-white ">
            Iniciar Sesión
          </h2>
          <label className="label">
            <span className="label-text text-white">Nombre</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Nombre"
            className="input-bordered input w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text text-white">Correo</span>
          </label>
          <input
          name="email"
            type="email"
            placeholder="Email"
            className="input-bordered input mb-10 w-full max-w-xs"
          />
          
              <button 
            className="btn-primary btn"
              
              onClick={
                (e)=>{
                  e.preventDefault()
                  const miForm = document.getElementById('loginForm') as HTMLFormElement
                  if(!miForm) return
                  const data = new FormData(miForm)
                  const validacion = validate(data.get('username') as string, data.get('email')as string)
                  setErroresLogin( validacion)
                  if(!!validacion){
                    return setDivError(true)
                  }
                  setDivError(false)
                  setUserInfo({
                    name: data.get('username') as string ,
                    email: data.get('email') as string  
                  }) 
                  return navigate("/Feed")

                  
                }
              }>
              Empezar

              </button>
             {divError? <h1 className="text-white my-4">{erroresLogin}</h1> :null}
          {/* <label className="label ">
            <a className="w-full text-center text-sm text-white hover:cursor-pointer hover:!text-white hover:underline">
              Olvidaste tu contraseña?
            </a>
          </label> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
