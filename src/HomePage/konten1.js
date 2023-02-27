import './konten1.css'
import Background1 from './background.jpeg'

const konten1 = () => {
    return (
        <div className='konten2'>
             <div className='konten3'>
            <h1><span>D</span>eskripsi <span>J</span>asa</h1>
            <p>Sebuah website yang berisikan produk-produk yang diiklankan atau di promosikan dari berbagai badan usaha di Indonesia yang bernama <span>"Nomyly.id"</span>. Kmia membantu mempromosikan atau mengiklankan produknya. </p>
            <button>Selengkapnya!</button>
            </div>
                <img src={Background1} alt=''/>
            
        </div>
      );
}
 
export default konten1;