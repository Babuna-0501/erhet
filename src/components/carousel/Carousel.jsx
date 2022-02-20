import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../assets/carousel-img.png'
import './carousel.scss';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              interval={5000}
            >
                <div>
                    <img loading='lazy' src={img}/>
                </div>
                <div>
                     <img loading='lazy' src={img}/>
                </div>
                <div>
                     <img loading='lazy' src={img}/>
                </div>
            </Carousel>
        </div>
    );
}