
type Props = {};

function Feed({}: Props) {
  return (
    <div className="flex w-full flex-col gap-12 lg:flex-row">
      <div className="card rounded-box grid w-8/12 flex-grow place-items-center bg-base-300 px-4">
        <h3 className="w-full pl-8 text-left font-Montserrat text-2xl font-bold">
          Hoy
        </h3>
        <div className="w-full">
          <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md">
            <div className="card-body w-11/12">
              <h2 className="card-title">Emprendimiento</h2>
              <p>Terminar prototipo solucion</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div>
          <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md">
            <div className="card-body w-11/12">
              <h2 className="card-title">Apreciación Cinematografica</h2>
              <p>Ver pelicula los miserables.</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div>
          <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md">
            <div className="card-body w-11/12">
              <h2 className="card-title">Calculo vectorial</h2>
              <p>Taller grupal asincronico</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div>
          <div className="card mb-1 flex w-full flex-row bg-base-100 shadow-md">
            <div className="card-body w-11/12">
              <h2 className="card-title">Fundamentos de Programación</h2>
              <p>Leer articulo de github copilot y code whisperer</p>
            </div>
            <div className="card-actions relative text-center">
              <label className="swap swap-flip mr-4 h-full  text-4xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">✅</div>
                <div className="swap-off">⭕</div>
              </label>
              <span className="absolute bottom-4 right-4 text-center text-xs">
                11:59 pm
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card rounded-box grid flex-grow place-items-center gap-4 bg-base-300 py-4">
        <h1 className="font-Poppins text-2xl font-bold ">Retos en curso 🔥</h1>
        <div className="card w-96  bg-base-100 shadow-xl">
          <figure className="h-20">
            <img
              src="/retos_banner.png"
              alt="Banner"
              className="h-1/8 w-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Prototipo veloz!</h2>
            <p>Termina el prototipo de emprendimiento antes de las 3:00 pm</p>
            <div className="card-actions justify-end">
              <button className="btn-primary btn">Unirte</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="relative h-20">
            <img
              src="/group_banner.svg"
              className="absolute -right-20 top-0 w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Calculadora humana!</h2>
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
                    <img src="/group_banner.svg" alt="banner" className="" />
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
                      <button className="btn-success btn" onClick={()=> window.location.href='/RetosPage'}>
                        Iniciar sesión de estudio
                      </button>
                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
