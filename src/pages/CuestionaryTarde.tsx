import {Link} from 'react-router-dom'

interface tiempo {
    manana: string[],
    tarde: string[],
    noche: string[],
  }
  

type Props = {
    tiempo: tiempo,
  setTiempo:  React.Dispatch<React.SetStateAction<tiempo>>

}
function Cuestionary({ tiempo, setTiempo }: Props) {
    return (
        <div className='px-4 mt-12 bg-base-100  pt-6'>
            <h4 className='text-xl font-semibold font-Montserrat'>En qué horas de la tarde estás disponible para el trabajo?</h4>
            <div className="form-control mt-6" id='cuestionary2'>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="0" className="checkbox checkbox-primary" />
                    <span className="label-text">12pm - 1pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="1" className="checkbox checkbox-primary" />
                    <span className="label-text">1pm - 2pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="2" className="checkbox checkbox-primary" />
                    <span className="label-text">2pm - 3pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="3" className="checkbox checkbox-primary" />
                    <span className="label-text">3pm - 4pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="4" className="checkbox checkbox-primary" />
                    <span className="label-text">4pm - 5pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="5" className="checkbox checkbox-primary" />
                    <span className="label-text">5pm - 6pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg ">
                    <input type="checkbox" value="N/A" className="checkbox checkbox-primary" />
                    <span className="label-text">Ninguna de las anteriores</span>
                </label>
            <div className='flex justify-around mb-12'>
            <Link to="/Cuestionary">
                <button className="btn btn-neutral mt-12 " onClick={()=>window.scrollTo(0,0)}>Anterior</button>

                </Link>
                <Link to="/CuestionaryNoche">
                <button className="btn btn-secondary mt-12 " onClick={
                    ()=>{
                        const formi = document.getElementById('cuestionary2')?.children
                        if(!formi) return;
                        const horas = []
                        for(let  n = 0; n < formi?.length;  n++){
                            const inputs = formi[n].firstElementChild as HTMLInputElement 
                            if(inputs.checked == true) horas.push(inputs.value)
                        }
                        setTiempo({...tiempo, tarde: horas})

                        localStorage.setItem('tiempo',JSON.stringify({...tiempo, tarde: horas}))
                        window.scrollTo(0,0)
                    }
                }>Siguiente</button>

                </Link>
            </div>
            </div>
        </div>

    )
}

export default Cuestionary