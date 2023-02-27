import './mitra.css'
import Icon from './back.png'
import Icon1 from './icon.png'
import Icon2 from './forward.png'


const mitra = () => {
    return ( 
        <div className='mitra'>
            <h1><span>M</span>itra <span>K</span>ami</h1>
        <div className='mitra1'>
            <img src={Icon} alt=""/>
            <div className='mitra3'>
            <div className='mitra2'>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            </div>
           
            <div className='mitra2'>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            <img src={Icon1} alt=""/>
            </div>
            </div>
            <img src={Icon2} alt=""/>
        </div>
        </div>
     );
}
 
export default mitra;