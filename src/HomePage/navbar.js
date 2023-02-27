import './navbar.css'
import {Link} from 'react-router-dom'
import gambar from './avenirtech.jpeg'

const navbar = () => {
    return ( 
        <div className='navbar'>
           <div className='logo'>
                <img src={gambar} alt=''/>
                <h2><span>A</span>venir<span>T</span>ech</h2>
                </div>
           <div className='nav'>
            <Link className='navigasi' to="/">beranda</Link>
            <Link className='navigasi' to="#">Visi</Link>
            <Link className='navigasi' to="#">Misi</Link>
            <Link className='navigasi' to="/about">Tentang</Link>
            <Link className='navigasi' to="/kontak">Contact</Link>
            <Link className='login' to="/login">Login</Link>
            </div>
        </div>
     );
}
 
export default navbar;