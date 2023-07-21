// ignore all ts errors in this file
// FIXME remove this once refactor is done
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
type Props = {};
import female_avatar from '/female_avatar.svg'
import female_avatar2 from '/female_avatar.svg'
import male_avatar from '/female_avatar.svg'
import random_avatar from '/random_avatar.svg'
import pic_profile from '/pic_profile.svg'
function RetosPage({}: Props) {
  let counter = 25;
  let contando = 60;
  setInterval(() => {
    if (counter > 0) {
      contando++;
      if (contando >= 60) {
        contando = 0;
        counter--;
        document
          .getElementById("counterElementM")
          ?.style.setProperty("--value", counter.toString());
      }
    }
    console.log(contando);
    document
      .getElementById("counterElementS")
      ?.style.setProperty("--value", (60 - contando).toString());
  }, 1000);
  return (
    <div className="flex">
      <div className="mx-auto flex w-1/2 flex-col items-center justify-center">
        <div className="card mb-4 w-full bg-base-100 shadow-xl shadow-[#00000033]">
          <div className="card-body w-full">
            <h2 className="card-title mb-2 justify-center font-Poppins text-3xl font-bold">
              Sesión Calculadora Humana 🍅
            </h2>
            <p>Taller grupal asincronico</p>
            <p>Termina el taller de calculo antes de las 5:00pm</p>
            <span className="font-mono countdown my-4 w-full justify-center font-Poppins text-5xl">
              <span id="counterElementM" style={{ "--value": 25 }}></span>:
              <span id="counterElementS" style={{ "--value": 60 }}></span>
            </span>
            <div className="card-actions justify-center">
              <button className=" btn text-5xl">⏸️ 🔁</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex  w-[500px] rounded-none border-b border-solid border-gray-400 bg-base-100">
            <div className="card-body flex min-w-full flex-row py-2 ">
              <p className="">Take a break 💧</p>
              <span>5min</span>
            </div>
          </div>
          <div className="card flex  w-[500px] rounded-none border-b border-solid border-gray-400 bg-base-100">
            <div className="card-body flex min-w-full flex-row py-2 ">
              <p className="">Continue studying 🕑</p>
              <span>25min</span>
            </div>
          </div>
          <div className="card flex  w-[500px] rounded-none border-b border-solid border-gray-400 bg-base-100">
            <div className="card-body flex min-w-full flex-row py-2 ">
              <p className="">Take a break 💧</p>
              <span>5min</span>
            </div>
          </div>
          <div className="card flex  w-[500px] rounded-none border-b border-solid border-gray-400 bg-base-100">
            <div className="card-body flex min-w-full flex-row py-2 ">
              <p className="">Continue studying 🕑</p>
              <span>25min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 flex flex-col justify-center items-center gap-2">
        <h2 className="font-Poppins font-bold text-center mb-4 text-xl text-purple-800">Personas trabajando<br/> en esta sesión</h2>
        <div className="indicator avatar">
          <span className="badge badge-secondary indicator-item">+10</span>
          <div className="h-20 w-20 rounded-lg drop-shadow-lg">
            <img src={female_avatar} />
          </div>
        </div>
        <div className="indicator avatar">
          <div className="h-20 w-20 rounded-lg">
            <img src={random_avatar} />
          </div>
        </div>
        <div className="indicator avatar">
          <div className="h-20 w-20 rounded-lg">
            <img src={pic_profile} />
          </div>
        </div>
        <div className="indicator avatar">
          <div className="h-20 w-20 rounded-lg">
            <img src={male_avatar} />
          </div>
        </div>
        <div className="indicator avatar">
          <div className="h-20 w-20 rounded-lg">
            <img src={female_avatar2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetosPage;
