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
        <div className='px-4 mt-12 bg-base-100 pt-6'>
            <h4 className='text-xl font-semibold font-Montserrat'>En que horas del dia estas disponible para el trabajo por la noche?</h4>
            <div className="form-control mt-6 " id='cuestionary3'>
                
            <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="6" className="checkbox checkbox-primary" />
                    <span className="label-text">6pm - 7pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="7" className="checkbox checkbox-primary" />
                    <span className="label-text">7pm - 8pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="8" className="checkbox checkbox-primary" />
                    <span className="label-text">8pm - 9pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="9" className="checkbox checkbox-primary" />
                    <span className="label-text">9pm - 10pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="10" className="checkbox checkbox-primary" />
                    <span className="label-text">10pm - 11pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg mb-2">
                    <input type="checkbox" value="11" className="checkbox checkbox-primary" />
                    <span className="label-text">11pm - 12pm</span>
                </label>
                <label className="label cursor-pointer flex justify-start gap-4 text-lg ">
                    <input type="checkbox" value="N/A" className="checkbox checkbox-primary" />
                    <span className="label-text">Ninguna de las anteriores</span>
                </label>
            <div className='flex justify-around mb-12'>
            <Link to="/CuestionaryTarde">
                <button className="btn btn-neutral mt-12 " onClick={()=>window.scrollTo(0,0)}>Anterior</button>

                </Link>
                <Link to="/Final">
                <button className="btn btn-secondary mt-12 " onClick={
                    ()=>{
                        const formi = document.getElementById('cuestionary3')?.children
                        if(!formi) return;
                        const horas = []
                        for(let  n = 0; n < formi?.length;  n++){
                            const inputs = formi[n].firstElementChild as HTMLInputElement 
                            if(inputs.checked == true) horas.push(inputs.value)

                        }
                        setTiempo({...tiempo, noche: horas})

                        localStorage.setItem('tiempo',JSON.stringify({...tiempo, noche: horas}))
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