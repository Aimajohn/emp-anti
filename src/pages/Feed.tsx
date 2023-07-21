import { Link } from "react-router-dom";
// import retos_banner from "/retos_banner.png";
import { MdOutlineAdd } from 'react-icons/md'
import group_banner from "/group_banner.svg";
// import { IconContext } from "react-icons";
// import { useState } from "react";

import { AiTwotoneAlert } from 'react-icons/ai'
import { BiSolidHappyBeaming } from 'react-icons/bi'
import { BsFillEmojiNeutralFill } from 'react-icons/bs'
import { GoAlertFill } from 'react-icons/go'
import { useEffect, useState } from "react";
// import Cuestionary from "./Cuestionary";


interface todo {
  titulo: string,
  descripcion: string,
  prioridad: string,
  tiempo: string,
}
interface userInfo {
  name: string,
  email: string
}

interface IMyProps {
  general: todo[],
  setGeneral: React.Dispatch<React.SetStateAction<todo[]>>,
  userInfo: userInfo
}




function Feed({ general, setGeneral, userInfo }: IMyProps) {
  const [incomplete, setIncomplete] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('todosCreated')
    if (saved && general.length == 0) {
      let tasks = JSON.parse(saved)
      setGeneral(tasks)
    }
  }, [])


  const addTask = (miData: any) => {

    if (!miData) return;
    const newGeneral = [...general, {
      titulo: miData.get('title'),
      descripcion: miData.get('description'),
      prioridad: miData.get('priority'),
      tiempo: String(30 + 30 * Number(miData.get('time')) / 25),
    }]
    setGeneral(newGeneral)
    localStorage.setItem('todosCreated', JSON.stringify(newGeneral))
  }
  return (
    <div className="flex w-full flex-col gap-12 lg:flex-row">

      <button className="">
      </button>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn fixed bottom-28 right-4 rounded-full bg-purple-600 w-16 h-16 font-bold text-center z-50 hover:bg-purple-800" onClick={
        () => {
          const mimodal = document.getElementById('my_modal_5') as HTMLDialogElement
          if (!mimodal) return;
          mimodal.showModal()
        }}>
        <MdOutlineAdd className="text-white mx-auto block text-4xl" />
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box" id="nuevaTarea">
          <h3 className="font-bold text-lg mb-6">Agrega una tarea!</h3>

          <input type="text" placeholder="Título" name="title" className="input input-bordered w-full max-w-xs mb-6" />
          <textarea name="description" className="textarea textarea-bordered w-full h-[200px] resize-none" placeholder="Descripcion de la tarea"></textarea>
          <select name="priority" title="priority" defaultValue={'Prioridad de la actividad'} className="select select-bordered  max-w-xs mb-4">
            <option disabled >Prioridad de la actividad</option>
            <option value={1}  >🟥 Urgente </option>
            <option value={2} >🟨 Algo Urgente  </option>
            <option value={3} >🟦 Poco Urgente  </option>
            <option value={4} >🟩 No Urgente  </option>
          </select>
          <p className="mb-4">Cuanto tiempo crees que tomaria realizar la actividad?</p>
          <input name="time" type="range" min={0} max={100} className="range range-primary" step={25} />
          <div className="w-full flex justify-between text-xs px-2">
            <span>30min</span>
            <span>1h</span>
            <span>1h30</span>
            <span>2h</span>
            <span>2h30</span>
          </div>
          <div className="modal-action">
            {incomplete ? <p>LLena todos la informacion de la tarea</p> : null}

            <div className="btn" onClick={() => {

              const secretButton = document.getElementById('cerradito')
              const formulario = document.getElementById('nuevaTarea') as HTMLFormElement
              const miData = new FormData(formulario)
              if (!miData.get('title') || !miData.get('description') || !miData.get('priority') || !miData.get('time')) {
                return setIncomplete(true)
              }
              setIncomplete(false)
              formulario?.reset()
              addTask(miData)
              secretButton?.click()
              window.scrollTo(0,0)
            }
            }>Agregar <button className="hidden" id="cerradito">cerrar</button></div>
          </div>
        </form>
      </dialog>



      {/* <dialog id="my_modal_1" className="modal"> */}
        
      {/* </dialog> */}
      <div className="card rounded-box w-full grid mt-4 lg:w-8/12 flex-grow place-items-center  lg:px-4">
        <h3 className="w-full pl-8 text-left font-Montserrat text-2xl font-bold text-white mb-4">
          Hola {userInfo.name || 'usuario'}!, cuales son tus tareas para el día?
        </h3>
        <div className="w-11/12 mx-auto ">
          <div
            className="card mb-1 flex  flex-col  lg:shadow-md hover:cursor-pointer relative  lg:hover:bg-gray-300"
          // onClick={() => {
          //   const miModal = document.getElementById("my_modal_2") as any;
          //   miModal?.showModal();
          // }}
          >
            {general.map(tarea => (
              <div key={tarea.titulo + tarea.prioridad} className="card-body flex flex-row bg-base-100 rounded-lg mb-2">
                <div className="w-8/12">
                  <h2 className="card-title ">
                    {tarea.titulo}
                  </h2>
                  <p>{tarea.descripcion}</p>
                </div>
                <div className="text-5xl mx-auto my-auto text-center">
                  {
                    Number(tarea.prioridad) < 3
                      ? Number(tarea.prioridad) == 1 ? <AiTwotoneAlert className="text-red-500 " /> : <GoAlertFill className="text-yellow-500" />
                      : Number(tarea.prioridad) == 3 ? <BsFillEmojiNeutralFill className="text-blue-500" /> : <BiSolidHappyBeaming className="text-green-500" />
                  }
                  <p className="text-base mt-2 text-center">{`${tarea.tiempo} min`}</p>
                </div>
              </div>
            ))}
            {/* <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div> */}
            {general.length != 0 ? null : <p className="my-12 mx-12 text-center text-white font-Montserrat text-xl">No tienes ningun tarea agreagada aun, empieza a organizar tu tiempo! </p>}
            <Link to='/Cuestionary' className="font-bold    font-Poppins text-lg  mx-auto">
              <button disabled={general.length != 0 ? false : true} className="btn btn-secondary py-6 h-fit mt-4 px-10" >Ordenar Tareas</button>
            </Link>
          </div>

          <dialog id="my_modal_2" className="modal">
            <form
              method="dialog"
              className="modal-box h-[85vh] max-w-[60%] px-20"
            >
              <div className="h-40 overflow-hidden">
                <img src={group_banner} alt="banner" className="" />
              </div>
              <h3 className="my-4 text-lg font-bold">
                Prototipo Emprendimiento
              </h3>
              <p className="w-4/6 py-4 leading-relaxed">
                En equipos deben realizar un prototipo inicial de su
                producto/servicio.
                <br />
                Este prototipo puede ser en un papel, usando cartón o cualquier
                material barato o que tengan a su disposición.
                <br />
                <br />
                Por ejemplo, si su producto es un reloj inteligente, pueden
                hacer dibujos en un papel de cómo se vería o usar materiales
                (papel, cartón, etc.) para poder mostrarlo físicamente y ver tal
                vez que tamaño y forma que tendría en la mano del cliente.
                <br /> ,<br />
                Si por ejemplo es un servicio, que se da por medio de una
                aplicación o página web, pueden hacer los dibujos de cómo sería
                las pantallas de cada sección de la APP o de la WEB, para que el
                cliente pueda interactuar y entender cómo puede acceder al
                servicio que están ofreciendo.
              </p>
              <div className="flex items-center justify-between rounded-md bg-slate-200 p-3">

              </div>
              <div className="modal-action">
                <button className="btn" onClick={addTask}>Close</button>
              </div>
            </form>
          </dialog>
          {/* <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md hover:cursor-pointer hover:bg-gray-300">
            <div className="card-body w-11/12">
              <h2 className="card-title">
                Apreciación Cinematografica{" "}
                <span className="text-xl font-bold">25pts</span>
              </h2>
              <p>Ver pelicula los miserables.</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div>
          <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md hover:cursor-pointer hover:bg-gray-300">
            <div className="card-body w-11/12">
              <h2 className="card-title">
                Calculo vectorial{" "}
                <span className="text-xl font-bold">50pts</span>
              </h2>
              <p>Taller grupal asincronico</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div>
          <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md hover:cursor-pointer hover:bg-gray-300">
            <div className="card-body w-11/12">
              <h2 className="card-title">
                Fundamentos de Programación{" "}
                <span className="text-xl font-bold">10pts</span>
              </h2>
              <p>Leer articulo de github copilot y code whisperer</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="card rounded-box grid flex-grow place-items-center gap-4 bg-base-300 py-4">
        <h1 className="font-Poppins text-2xl font-bold ">Retos en curso 🔥</h1>
        <div className="card relative  mb-6 w-96 bg-base-100 shadow-xl ">
          <div className="badge badge-secondary absolute -right-4 -top-4 px-4 py-5 text-xl font-bold">
            +100pts
          </div>

          <figure className="h-20 overflow-hidden">
            <img
              src={retos_banner}
              alt="Banner"
              className="h-1/8 w-full object-cover object-top"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title flex justify-between">
              <p>Prototipo veloz!</p>
              <span>50pts</span>
            </h2>
            <p>Termina el prototipo de emprendimiento antes de las 3:00 pm</p>
            <div className="card-actions justify-end">
              <button className="btn-primary btn">Unirte</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="badge badge-secondary absolute -right-4 -top-4 px-4 py-5 text-xl font-bold">
            +200pts
          </div>

          <figure className="relative h-20 overflow-hidden">
            <img
              src={group_banner}
              className="absolute -right-20 top-0 w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              <p>Calculadora Humana!</p>
              <span>100pts</span>
            </h2>
            <p>Termina el taller de calculo antes de las 5:00 pm</p>
            <div className="card-actions justify-end">
              <button
                className="btn-primary btn "
                onClick={() => {
                  const miModal = document.getElementById("my_modal_1") as any;
                  miModal?.showModal();
                }}
              >
                Unirme
              </button>
              <dialog id="my_modal_1" className="modal">
                <form
                  method="dialog"
                  className="modal-box h-[70vh] max-h-[70vh] max-w-[700px]"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={group_banner} alt="banner" className="" />
                  </div>
                  <h3 className="text-lg font-bold">Calculadora Humana!</h3>
                  <p className="py-4">
                    Termina el taller de calculo antes de las 5:00pm
                  </p>
                  <div className="flex items-center justify-between rounded-md bg-slate-200 p-3">
                    <div className="">
                      <h3 className="card-title mb-3">Calculo Vectorial</h3>
                      <p>Taller grupal asincronico</p>
                    </div>
                    <button className="btn-success btn">
                      <Link to="/RetosPage" className="block w-full">
                        Iniciar sesión de estudio
                      </Link>
                    </button>
                  </div>
                  <div className="modal-action">
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Feed;
