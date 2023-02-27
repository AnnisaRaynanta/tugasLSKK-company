import Nav from './navbar'
import Carousel from './carousel'
import Konten from './konten'
import Konten1 from './konten1'
import Kontak from '../about/contact'
import Footer from '../about/footer'
import Mitra from './mitra'



const homepage = () => {
    return ( 
        <>
        <Nav/>
        <Carousel/>
       <Konten/>
       <Konten1/>
       <Mitra/>
       <Kontak/>
       <Footer/>
        </>
     );
}
 


export default homepage;