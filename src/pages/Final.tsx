import { Link } from 'react-router-dom'

interface userInfo {
    name: string,
    email: string
}

interface todo {
    titulo: string,
    descripcion: string,
    prioridad: string,
    tiempo: string,
}
interface tiempo {
    manana: string[],
    tarde: string[],
    noche: string[],
}
interface Props {
    general: todo[],
    userInfo: userInfo,
    tiempo: tiempo
}

import { AiTwotoneAlert } from 'react-icons/ai'
import { BiSolidHappyBeaming } from 'react-icons/bi'
import { BsFillEmojiNeutralFill } from 'react-icons/bs'
import { GoAlertFill } from 'react-icons/go'


function Final({ userInfo, general, tiempo }: Props) {
    const orden: string[][][] = [[], [], [], []]
    const ordenTiempo: string[][] = [[], [], [], []]
    general.forEach(tarea => {
        const data = [tarea.titulo, tarea.descripcion, tarea.tiempo, tarea.prioridad]
        orden[Number(tarea.prioridad) - 1] = [...orden[Number(tarea.prioridad) - 1], data]
        ordenTiempo[Number(tarea.prioridad) - 1].push(tarea.tiempo)
    });
    const tareasOrdenadas: string[][] = []
    let i = 0
    for (const grupo of orden) {
        if (grupo.length > 0) {
            const indexes = Array.from(ordenTiempo[i].keys())
            indexes.sort((a, b) => Number(ordenTiempo[i][a]) - Number(ordenTiempo[i][b]));
            indexes.forEach(index => tareasOrdenadas.push(grupo[index]))
        }
        i++
    }

    let todos: any[] = []
    let todosTiempos = [...tiempo.manana, ...tiempo.tarde, ...tiempo.noche]
    let init = 0
    let tiempoActual = todosTiempos[init]


    tareasOrdenadas.forEach(tarea => {
        let duracion = Number(tarea[2])
        do {
            const tiempoFinal = Number(tiempoActual) + (Number(tarea[2]) < 60 ? duracion / 60 : (Number(tiempoActual) > Math.floor(Number(tiempoActual)) ? 0.5 : 1))
            todos.push([tarea[0], tarea[1], tarea[2], tarea[3], tiempoActual, tiempoFinal])
            if (duracion < 60) {
                tiempoActual = String(Number(tiempoActual) + duracion / 60)
                duracion -= 30
            } else {
                init++
                tiempoActual = todosTiempos[init]
                if (Number(tiempoActual) > Math.floor(Number(tiempoActual))) {
                    duracion -= 60
                } else {
                    (duracion % 60 == 0) ? duracion -= 60 : duracion -= 30
                }
            }
        } while (duracion > 0)

    })
    todos = todos.map(tarea => {
        if (Number(tarea[4]) != Math.floor(Number(tarea[4]))) {
            tarea[4] = `${Math.floor(Number(tarea[4]))}:30`
        }else{
            tarea[4] = `${tarea[4]}:00`
        }
        if (Number(tarea[5]) != Math.floor(Number(tarea[5]))) {
            tarea[5] = `${Math.floor(Number(tarea[5]))}:30`
        }else{
            tarea[5] = `${tarea[5]}:00`
        }
        return tarea
    })
    return (
        <div>
            <div className='mb-4 mt-12 mx-4 text-white'>
            <h2 className=' text-3xl font-Montserrat leading-tight font-bold '  >Hemos terminado {userInfo.name || 'usuario'}.<br/></h2>
            <p className='text-lg font-Montserrat'>Aquí te mostramos una forma de organizar tus actividades:</p>

            </div>
            <div className='grid grid-cols-'>
                {todos.map(tarea => (
                    
                    <div key={tarea[0] + tarea[5]} className="card-body flex flex-row bg-base-100 mx-2 rounded-lg mb-2">
                        
                        <div className="w-8/12">
                            <div>
                            <h2 className="card-title font-bold ">
                                {tarea[0]}
                            </h2>
                            <p className="text-small  text-left">{`${tarea[4]}am - ${tarea[5]}am`}</p>

                            </div>
                            <p>{tarea[1]}</p>
                        </div>
                        <div className="text-5xl mx-auto my-auto text-center">
                            {
                                Number(tarea[3]) < 3
                                    ? Number(tarea[3]) == 1 ? <AiTwotoneAlert className="text-red-500 " /> : <GoAlertFill className="text-yellow-500" />
                                    : Number(tarea[3]) == 3 ? <BsFillEmojiNeutralFill className="text-blue-500" /> : <BiSolidHappyBeaming className="text-green-500" />
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full pb-12 min-h-fit'>
            <Link to="/Login" className='w-fit h-fit mx-auto block my-12'>
                <button className="btn btn-neutral   " onClick={() => {
                    localStorage.clear()
                }}>Abandonar página</button>
            </Link>

            </div>

        </div>
    )
}

export default Final