import { Link } from "react-router-dom";
import retos_banner from "/retos_banner.png";
type Props = {};
import group_banner from "/group_banner.svg";
import female_avatar from "/female_avatar.svg";
import female_avatar2 from "/female_avatar.svg";
import male_avatar from "/female_avatar.svg";
import random_avatar from "/random_avatar.svg";
import pic_profile from "/pic_profile.svg";
function Friends({}: Props) {
  return (
    <div className="card rounded-box grid flex-grow place-items-center gap-4 bg-base-300 py-4">
      <h1 className="mb-4 font-Poppins text-2xl font-bold">
        Retos de tus amigos en curso 🔥
      </h1>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="card relative  w-96 bg-base-100 shadow-xl ">
          <div className="indicator avatar absolute -left-6 -top-8 rounded-full border-2 border-purple-800 bg-white ">
            <div className="h-20 w-20 rounded-lg">
              <img src={pic_profile} />
            </div>
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
              <button className="btn-secondary btn">Fail 50pts</button>
              <button className="btn-success btn">Exito 50pts</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="indicator avatar absolute -left-6 -top-8 rounded-full border-2 border-purple-800 bg-white ">
            <div className="h-20 w-20 rounded-lg">
              <img src={random_avatar} />
            </div>
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
                <button className="btn-secondary btn">Fail 50pts</button>
              <button
                className="btn-success btn "
                onClick={() => {
                  const miModal = document.getElementById("my_modal_1") as any;
                  miModal?.showModal();
                }}
              >Exito 50pts</button>
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
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
        <div className="card relative  w-96 bg-base-100 shadow-xl ">
          <div className="indicator avatar absolute -left-6 -top-8 rounded-full border-2 border-purple-800 bg-white ">
            <div className="h-20 w-20 rounded-lg">
              <img src={female_avatar} />
            </div>
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
              <button className="btn-secondary btn">Fail 50pts</button>
              <button className="btn-success btn">Exito 50pts</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="indicator avatar absolute -left-6 -top-8 rounded-full border-2 border-purple-800 bg-white ">
            <div className="h-20 w-20 rounded-lg">
              <img src={female_avatar2} />
            </div>
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
                <button className="btn-secondary btn">Fail 50pts</button>
              <button
                className="btn-success btn "
                onClick={() => {
                  const miModal = document.getElementById("my_modal_1") as any;
                  miModal?.showModal();
                }}
              >Exito 50pts</button>
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
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
        <div className="card relative  w-96 bg-base-100 shadow-xl ">
          <div className="indicator avatar absolute -left-6 -top-8 rounded-full border-2 border-purple-800 bg-white ">
            <div className="h-20 w-20 rounded-lg">
              <img src={pic_profile} />
            </div>
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
              <button className="btn-secondary btn">Fail 50pts</button>
              <button className="btn-success btn">Exito 50pts</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="indicator avatar absolute -left-6 -top-8 rounded-full border-2 border-purple-800 bg-white ">
            <div className="h-20 w-20 rounded-lg">
              <img src={male_avatar} />
            </div>
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
                <button className="btn-secondary btn">Fail 50pts</button>
              <button
                className="btn-success btn "
                onClick={() => {
                  const miModal = document.getElementById("my_modal_1") as any;
                  miModal?.showModal();
                }}
              >Exito 50pts</button>
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

export default Friends;
