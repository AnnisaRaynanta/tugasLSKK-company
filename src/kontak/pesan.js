import './pesan.css'

const pesan = () => {
    return (
        <div className='pesan'>
            <h1><span>K</span>irim <span>P</span>esan</h1>
            <div className='pesan1'>
                
                <form id='pesan2'>
                    <input type='text'/>
                </form>

                <button id='button'>Kirim</button>
            </div>
        </div>
      );
}
 
export default pesan;