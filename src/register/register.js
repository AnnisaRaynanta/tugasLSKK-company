import './register.css'
import {Link} from 'react-router-dom'
import Foto from './tanam.jpg'
import Logo from './avenirtech.jpeg'


const Register = () => {
    return ( 
        <div className='login'>
            <div id='foto'>
                <img src={ Foto} alt=''/>
            </div>
            <div className='page'>
                <img src={Logo} alt=''/>
                <h1>R E G I S T E R</h1>
                <form>
                    <label id='label'>Username</label>
                    <input type='text'/>
                    <label id='label'>Email</label>
                    <input type='text'/>
                    <label id='label'>Password</label>
                    <input type='text'/>
                    <Link to="/"> <button id='button1'>Register</button></Link>
                </form>
                <Link className='link' to="/login">Login</Link>
       </div>
       </div>

     );
}
 
export default Register;