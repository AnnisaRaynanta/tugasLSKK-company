import './login.css'
import {Link} from 'react-router-dom'
import Foto from './tanam.jpg'
import Logo from './avenirtech.jpeg'


const Login = () => {
    return ( 
        <div className='login'>
            <div id='foto'>
                <img src={ Foto} alt=''/>
            </div>
            <div className='page'>
                <img src={Logo} alt=''/>
                <h1>L O G I N</h1>
                <form>
                    <label id='label'>Username</label>
                    <input type='text'/>
                    <label id='label'>Password</label>
                    <input type='text'/>
                    <Link to="/"><button id='button1'>Login</button></Link>
                </form>
                <Link className='link' to="/register">Register</Link>
       </div>
       </div>

     );
}
 
export default Login;