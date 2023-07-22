type Props = {};
import { Link } from "react-router-dom";
import male_avatar from "/male_avatar.svg";

function Navbar({}: Props) {
  return (
    <div className="navbar mb-5 font-Poppins">
      <div className="flex-1">
        <Link
          to="/Feed"
          className="btn-ghost btn mx-auto pt-10 text-3xl font-extrabold normal-case text-slate-100 lg:mx-0 lg:p-4 lg:text-3xl"
        >
          Plangie{" "}
          <b className="-ml-2 -mt-1 inline-block text-5xl font-bold text-purple-600">
            .
          </b>
          {/* <b className='text-purple-800 inline -ml-2'>angie</b> */}
        </Link>
      </div>
      <div className="hidden flex-none gap-2 ">
        <Link to={"/Friends"}>Amigos</Link>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input w-24 md:w-auto"
          />
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src={male_avatar} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-72 bg-base-100 p-2 shadow"
          >
            <li>
              <div className="stat">
                <div className="stat-value">86%</div>
                <div className="stat-title">Tareas completadas</div>
                <div className="stat-desc text-secondary">31 pendientes</div>
              </div>
            </li>

            <li>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Puntos Totales</div>
                <div className="stat-value text-primary">250pts</div>
                <div className="stat-desc">21% mas que el mes pasado</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
