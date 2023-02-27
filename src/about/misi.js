import './misi.css'
import Ruangan from './office1.jpg'

const visi = () => {
    return (  
        <div className='misi'>
            
            <div className='text5'>
            <h3><span>M</span>isi</h3>
       <ol>
        <li>Melakkan promosi dalam bentuk website</li>
        <li>Membantu para penggiat usaha agar mudah untuk mendapatkan pelanggan atau pembeli</li>
       </ol>
        </div>
        <img src={Ruangan} alt=''/>
        </div>
    );
}
 
export default visi;