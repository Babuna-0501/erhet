import './branch.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import branch1 from '../../assets/branch1.png'
import branch2 from '../../assets/branch2.png'
import branch3 from '../../assets/branch3.png'
import branch4 from '../../assets/branch4.png'



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Branch = () => {
  return (
    <div className='branch'>
        <div className='top'>
            <h3>Охин компань</h3>
            <h5>Бүгдийг харах</h5>
        </div>
        <div className='bottom'>
            <Carousel responsive={responsive} className='slider'>
                <div className='img-wrapper'><img src={branch1}/></div>
                <div className='img-wrapper'><img src={branch2}/></div>
                <div className='img-wrapper'><img src={branch3}/></div>
                <div className='img-wrapper'><img src={branch4}/></div>
                <div className='img-wrapper'><img src={branch1}/></div>
                <div className='img-wrapper'><img src={branch2}/></div>
                <div className='img-wrapper'><img src={branch3}/></div>
                <div className='img-wrapper'><img src={branch4}/></div>
            </Carousel>
        </div>
    </div>
  )
}

export default Branch
