import './konten.css'
import Background from './background1.jpeg'

const konten = () => {
    return ( 
        <div className='konten'>
            <img src={Background} alt=''/>
            <div className='konten1'>
                <h1><span>K</span>onsep <span>B</span>isnis</h1>
                <p>AvenirTech Company adalah perusahaan yang mempunyai produk berupa website swbagai wadah untuk mempromosikan produk produk badan usaha di Indonesia. Komitmen Kami adalah ikut serta dalam meningkatkan perekonomian pada masyarakat. Mempermudah badan usaha untuk memndapatkan penghasilan dan melakukan promosi dan penjualan dalam bentuk digital. Produk website dari perusahaan Kami tersebut bernama <span>"Nomyly.id"</span></p>
                <button>Selengkapnya!</button>
            </div>
        </div>
     );
}
 
export default konten;