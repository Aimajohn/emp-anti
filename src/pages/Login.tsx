import { useNavigate } from "react-router-dom";

import login_img from "/login_img.svg";
import { useEffect, useState } from "react";

interface userInfo {
  name: string;
  email: string;
}
interface todo {
  titulo: string;
  descripcion: string;
  prioridad: string;
  tiempo: string;
}

type Props = {
  setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>;
  setGeneral: React.Dispatch<React.SetStateAction<todo[]>>;
};

function Login({ setUserInfo, setGeneral }: Props) {
  const [divError, setDivError] = useState(false);
  const [erroresLogin, setErroresLogin] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setGeneral([] as todo[]);
  }, []);

  function validate(name: string, email: string) {
    let errores = "";
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
    return errores;
  }

  return (
    <div className="flex flex-col gap-10 lg:mx-12 lg:flex-row lg:items-center lg:justify-between lg:px-20">
      <div className=" card rounded-box hidden  h-fit max-w-[40%] flex-grow place-items-center  items-center bg-[#531d86a1] lg:mb-11 lg:flex lg:h-full lg:py-20">
        <img className="w-96 " src={login_img} alt="" />
      </div>
      <div className="card w-full flex-grow place-items-center rounded-none py-12 pb-60 font-Poppins lg:rounded-box lg:mb-12 lg:grid lg:h-full lg:max-w-[40%] lg:bg-white lg:px-0">
        <form
          className="form-control w-10/12 max-w-xs lg:w-full"
          id="loginForm"
        >
          <h2 className="mb-7 hidden text-center font-Poppins text-3xl font-bold text-white lg:block lg:text-slate-900 ">
            Iniciar Sesión
          </h2>
          <label className="label">
            <span className="label-text text-white">Nombre</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Nombre"
            className="input-bordered input w-full max-w-xs shadow-sm shadow-slate-500"
          />
          <label className="label">
            <span className="label-text text-white">Correo</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input-bordered input mb-10 w-full max-w-xs shadow-sm shadow-slate-500"
          />

          <button
            className="btn-primary btn"
            onClick={(e) => {
              e.preventDefault();
              const miForm = document.getElementById(
                "loginForm"
              ) as HTMLFormElement;
              if (!miForm) return;
              const data = new FormData(miForm);
              const validacion = validate(
                data.get("username") as string,
                data.get("email") as string
              );
              setErroresLogin(validacion);
              if (!!validacion) {
                return setDivError(true);
              }
              setDivError(false);
              setUserInfo({
                name: data.get("username") as string,
                email: data.get("email") as string,
              });
              return navigate("/Feed");
            }}
          >
            Empezar
          </button>
          {divError ? (
            <h1 className="my-4 text-white">{erroresLogin}</h1>
          ) : null}
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
