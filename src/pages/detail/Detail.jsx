import './detail.scss'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import Sidebar from '../../components/sidebar/Sidebar';

const Detail = () => {
  return (
    <div className='detail'>
        <div className='container'>
             <Navbar/>
             <Header/> 
             <div className='inner'>
                 <Info/>
                 <Sidebar/>
             </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Detail