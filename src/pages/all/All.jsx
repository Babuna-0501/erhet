import './all.scss';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import img1 from '../../assets/all1.png'
import img2 from '../../assets/all2.png'
import img3 from '../../assets/all3.png'
import img4 from '../../assets/all4.png'


const All = () => {
  return (
    <div className='all'>
            <Navbar/>
            <Header/> 
            <h2>Бүгдийг үзэх</h2>
            <div className='container'>
                <div className='wrapper'>
                    <div>
                        <h4>Хэвлэл мэдээллийн салбар</h4>
                        <img src={img1} alt="" />
                        <div></div>
                    </div>
                    <div>
                        <h4> Хөрөнгө зуучлалын салбар</h4>
                        <img src={img2} alt="" />
                        <div></div>
                    </div>
                </div>
                <div className='wrapper' style={{marginTop:"60px"}}>
                    <div>
                        <h4>Санхүү, хөрөнгө оруулалтын салбар</h4>
                        <img src={img3} alt="" />
                        <div></div>
                    </div>
                    <div>
                        <h4>Барилга, бүтээн байгуулалтын салбар</h4>
                        <img src={img4} alt="" />
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default All