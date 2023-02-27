import './hubungi.css'
import Gambar from './icons8-instagram-48.png'
import Gambar1 from './icons8-facebook-48.png'
import Gambar2 from './icons8-whatsapp-48.png'
import Gambar3 from './icons8-youtube-48.png'

const hubungi = () => {
    return ( 
        <div className='kata'>
            <h1><span>H</span>ubungi <span className='active'>K</span>ami</h1>
        <div className='hub'>
            <div className='hub1'>
                <p>Alamat: Avenir Space Jl.Diponegoro Kav 63 Kota Bandung, Jawa Barat 40190</p>

            </div>
            <div className='hub2'>
                <div className='hub3'>
                    <img src={Gambar} alt=''/>
                    <p>PT.AvenirTech</p>
                </div>
                <div className='hub3'>
                    <img src={Gambar1} alt=''/>
                    <p>AvenirTech</p>
                </div>
                </div>
                <div className='hub2'>
                <div className='hub3'>
                    <img id='gambar22' src={Gambar2} alt=''/>
                    <p>0895-7003-05080</p>
                </div>
                <div className='hub3'>
                    <img id='gambar33' src={Gambar3} alt=''/>
                    <p>@pt.avenirtech</p>
                </div>
                </div>
        </div>
        </div>
     );
}
 
export default hubungi;