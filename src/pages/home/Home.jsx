import  './home.scss';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Carousel from '../../components/carousel/Carousel';
import News from '../../components/news/News';
import Branch from '../../components/branch/Branch';
import Investor from '../../components/investor/Investor';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <div className='home'>
        <div className="container">
            <Navbar/>
          <Header/> 
            <Carousel/>
            <News/>
            <Branch/>
            <Investor/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home