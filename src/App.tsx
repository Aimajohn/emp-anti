import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './pages/components/Navbar'
import Feed from './pages/Feed'
import RetosPage from "./pages/RetosPage";

type Props = {};

function App({}: Props) {
  return <div>
    <Navbar/>
     <Routes>
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/RetosPage' element={<RetosPage/>}/>
      <Route path='*' element={<Login/>}/>
    </Routes>
  </div>;
}

export default App;

