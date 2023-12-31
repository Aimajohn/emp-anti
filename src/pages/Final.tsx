import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
interface tiempo {
  manana: string[];
  tarde: string[];
  noche: string[];
}
interface Props {
  general: todo[];
  userInfo: userInfo;
  tiempo: tiempo;
}

import { AiTwotoneAlert } from "react-icons/ai";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";
type FormValues = {
  name: string;
  email: string;
  title: string;
  text: string;
};

function Final({ userInfo, general, tiempo }: Props) {
  const navigate = useNavigate();

  async function mail(values: FormValues) {
    try {
      const result = await emailjs.send(
        "service_7mvg1rk",
        "template_uft29ye",
        values,
        "2XmBsJNpd-97J62si"
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const orden: string[][][] = [[], [], [], []];
  const ordenTiempo: string[][] = [[], [], [], []];
  general.forEach((tarea) => {
    const data = [
      tarea.titulo,
      tarea.descripcion,
      tarea.tiempo,
      tarea.prioridad,
    ];
    orden[Number(tarea.prioridad) - 1] = [
      ...orden[Number(tarea.prioridad) - 1],
      data,
    ];
    ordenTiempo[Number(tarea.prioridad) - 1].push(tarea.tiempo);
  });
  const tareasOrdenadas: string[][] = [];
  let i = 0;
  for (const grupo of orden) {
    if (grupo.length > 0) {
      const indexes = Array.from(ordenTiempo[i].keys());
      indexes.sort(
        (a, b) => Number(ordenTiempo[i][a]) - Number(ordenTiempo[i][b])
      );
      indexes.forEach((index) => tareasOrdenadas.push(grupo[index]));
    }
    i++;
  }

  let todos: any[] = [];
  let todosTiempos = [...tiempo.manana, ...tiempo.tarde, ...tiempo.noche];
  let init = 0;
  let tiempoActual = todosTiempos[init];

  tareasOrdenadas.forEach((tarea) => {
    let duracion = Number(tarea[2]);
    do {
      const tiempoFinal =
        Number(tiempoActual) +
        (Number(tarea[2]) < 60
          ? duracion / 60
          : Number(tiempoActual) > Math.floor(Number(tiempoActual))
          ? 0.5
          : 1);
      todos.push([
        tarea[0],
        tarea[1],
        tarea[2],
        tarea[3],
        tiempoActual,
        tiempoFinal,
      ]);
      if (duracion < 60) {
        tiempoActual = String(Number(tiempoActual) + duracion / 60);
        duracion -= 30;
      } else {
        init++;
        tiempoActual = todosTiempos[init];
        if (Number(tiempoActual) > Math.floor(Number(tiempoActual))) {
          duracion -= 60;
        } else {
          duracion % 60 == 0 ? (duracion -= 60) : (duracion -= 30);
        }
      }
    } while (duracion > 0);
  });
  todos = todos.map((tarea) => {
    if (Number(tarea[4]) != Math.floor(Number(tarea[4]))) {
      tarea[4] = `${Math.floor(Number(tarea[4]))}:30`;
    } else {
      tarea[4] = `${tarea[4]}:00`;
    }
    if (Number(tarea[5]) != Math.floor(Number(tarea[5]))) {
      tarea[5] = `${Math.floor(Number(tarea[5]))}:30`;
    } else {
      tarea[5] = `${tarea[5]}:00`;
    }
    return tarea;
  });
  let ini = 0;

  const savingInfo = async () => {
    const mailed = localStorage.getItem("emailed");
    if (!mailed) {
      const awee = await mail({
        name: userInfo.name,
        email: userInfo.email,
        title: JSON.stringify(todosTiempos),
        text: JSON.stringify(todos),
      });
      console.log(awee);
      localStorage.setItem("emailed", "true");
    }
  };
  savingInfo();

  return (
    <div>
      <div className="mx-4 mb-4 mt-12 text-white">
        <h2 className=" font-Montserrat text-3xl font-bold leading-tight ">
          Hemos terminado {userInfo.name || "usuario"}.<br />
        </h2>
        <p className="font-Montserrat text-lg">
          Aquí te mostramos una forma de organizar tus actividades:
        </p>
      </div>
      <div className="grid-cols- grid">
        {todos.map((tarea) => (
          <div
            key={tarea[0] + tarea[5] + ini++}
            className="card-body mx-2 mb-2 flex flex-row rounded-lg bg-base-100"
          >
            <div className="w-8/12">
              <div>
                <h2 className="card-title font-bold ">{tarea[0]}</h2>
                <p className="text-small  text-left">{`${tarea[4]}${
                  tarea[3] != 1 ? "pm" : "am"
                } - ${tarea[5]}${tarea[3] != 1 ? "pm" : "am"}`}</p>
              </div>
              <p>{tarea[1]}</p>
            </div>
            <div className="mx-auto my-auto text-center text-5xl">
              {Number(tarea[3]) < 3 ? (
                Number(tarea[3]) == 1 ? (
                  <AiTwotoneAlert className="text-red-500 " />
                ) : (
                  <GoAlertFill className="text-yellow-500" />
                )
              ) : Number(tarea[3]) == 3 ? (
                <BsFillEmojiNeutralFill className="text-blue-500" />
              ) : (
                <BiSolidHappyBeaming className="text-green-500" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="min-h-fit w-full pb-12">
        <button
          className="btn-neutral btn   mx-auto my-12 block"
          onClick={async () => {
            localStorage.clear();
            window.scrollTo(0, 0);
            navigate("/Login");
          }}
        >
          Abandonar página
        </button>
      </div>
    </div>
  );
}

export default Final;
