"use client";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import { Buttoncomponent } from '@/components/button';
import './herosection.css';

function Hero_section() {
  return (
    <div className="carousel-container">
      <div className="overlay"></div> {/* Overlay for darkening the background */}
      <Carousel
        fade
        interval={3000}
        controls={true}
        indicators={true}
      >
        <Carousel.Item>
          <div className="row hero-slider">
            <div className="col-lg-6">
              <img 
                src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img1.png"
                className="carousel-img" 
                alt="Slide 1"
              />
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <h3 className="slide-title">First slide label</h3>
              <p className="slide-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Buttoncomponent title_data="more details" color="#000  " bg="#fff"  />
            </div>

          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row hero-slider">
            <div className="col-lg-6">
              <img 
                src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img1.png"
                className="carousel-img" 
                alt="Slide 1"
              />
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <h3 className="slide-title">second slide label</h3>
              <p className="slide-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Buttoncomponent title_data="more details" color="#000  " bg="#fff"  />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row hero-slider">
            <div className="col-lg-6">
              <img 
                src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img1.png"
                className="carousel-img" 
                alt="Slide 1"
              />
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <h3 className="slide-title">third slide label</h3>
              <p className="slide-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Buttoncomponent title_data="more details" color="#000  " bg="#fff"  />
            </div>
          </div>
        </Carousel.Item>

        {/* Add other Carousel Items here... */}

      </Carousel>
    </div>
  );
}

export default Hero_section;
