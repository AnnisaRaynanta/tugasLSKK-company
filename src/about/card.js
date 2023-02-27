import './card.css'

import Icon from './icon.png'

const card = () => {
    return ( 
        <div className='kotak'>
        <h5><span>T</span>im <span>K</span>ami</h5>

        <div className='card4'>
          
            <div className='card5'>
                <img src={Icon} alt=''/>
                <div className='text1'>
                <h2>Dhendi Syafa Athallah Putra</h2>
                <p>Chief Executive Officer (CEO)</p>
                </div>
            </div>
            <div className='card5'>
                <img src={Icon} alt=''/>
                <div className='text1'>
                <h2>Fitrah Noviansyah</h2>
                <p>Chief Operating Officer (COF)</p>
                </div>
            </div>
            <div className='card5'>
                <img src={Icon} alt=''/>
                <div className='text1'>
                <h2>Hibban MUhammad Abdurrouf</h2>
                <p>Chief Technology Officer (CTO)</p>
                </div>
            </div>

            
        </div>

        <div className='card4 '>
          
          <div className='card5'>
              <img src={Icon} alt=''/>
              <div className='text1'>
              <h2>Azka Putra Mulyana </h2>
              <p>Chief Marketing Officer (CMO)</p>
              </div>
          </div>
          <div className='card5'>
              <img src={Icon} alt=''/>
              <div className='text1'>
              <h2>Annisa Raynanta Tricahyani</h2>
              <p>Chief Financial Officer (CFO)</p>
              </div>
          </div>
          <div className='card5'>
              <img src={Icon} alt=''/>
              <div className='text1'>
              <h2>Ikhlas Ramdani</h2>
              <p>Data Processing</p>
              </div>
          </div>

          
      </div>
        </div>
     );
}
 
export default card;