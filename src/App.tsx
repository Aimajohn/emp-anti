import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './pages/components/Navbar'
import Feed from './pages/Feed'
import RetosPage from "./pages/RetosPage";
import Friends from './pages/Friends'
import Cuestionary from './pages/Cuestionary'
import CuestionaryTarde from './pages/CuestionaryTarde'
import CuestionaryNoche from './pages/CuestionaryNoche'
import Final from './pages/Final';
import { useState } from 'react'

type Props = {};
interface todo {
  titulo: string,
    descripcion: string,
    prioridad: string,
    tiempo: string,
}
// interface tiempo {
//   manana: string[],
//   tarde: string[],
//   noche: string[],
// }

interface userInfo{
  name: string,
  email: string
}

function App({ }: Props) {
  const [general, setGeneral] = useState([] as todo[])
  const [userInfo, setUserInfo] = useState({} as userInfo)
  const [tiempo, setTiempo] = useState({
    manana: [''],
    tarde: [''],
    noche: [''],
  })
  return <div className='bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 lg:bg-white min-h-screen'>
    <Navbar />
    <Routes>
      <Route path='/feed' element={<Feed general={general} setGeneral={setGeneral} userInfo = {userInfo}></Feed>} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/RetosPage' element={<RetosPage />} />
      <Route path='/Cuestionary' element={<Cuestionary tiempo={tiempo} setTiempo={setTiempo}/>} />
      <Route path='/CuestionaryTarde' element={<CuestionaryTarde tiempo={tiempo} setTiempo={setTiempo}/>} />
      <Route path='/CuestionaryNoche' element={<CuestionaryNoche tiempo={tiempo} setTiempo={setTiempo}/>} />
      <Route path='/Final' element={<Final userInfo = {userInfo} general={general} tiempo={tiempo}/>} />
      <Route path='*' element={<Login setUserInfo={setUserInfo}/>} />
    </Routes>
  </div>;
}

export default App;

