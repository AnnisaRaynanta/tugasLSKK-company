import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Home from './HomePage/homepage';
import About from './about/about'
import Kontak from './kontak/kontak'






const App = ()=>{
    return(
       <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element= {<Register/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/kontak' element={<Kontak/>}/>
       </Routes>

    )
}

export default App;