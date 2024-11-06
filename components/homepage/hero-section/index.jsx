"use client";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import { Buttoncomponent } from '@/components/button';
import './herosection.css';
import { ShoppingCart } from 'lucide-react';

function Hero_section() {
  return (
    <div className="carousel-container">
      <div className="overlay">
        <img src="https://wowtheme7.com/tf/marketpro/assets/images/bg/banner-bg2.png" />
      </div> {/* Overlay for darkening the background */}
      <Carousel
        fade
        interval={3000}
        controls={true}
        indicators={true}
      >
        <Carousel.Item>
          <div className="row border rounded p-5 hero-slider">
            <div className="col-lg-8  d-flex justify-content-center flex-column">
              <h3 >Get Grocery order </h3>
              <button>View More <ShoppingCart /></button>
            </div>
            <div className="col-lg-4 ">
              <img
                src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img1.png"
                className="carousel-img"
                alt="Slide 1"
              />

            </div>

          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row border rounded p-5 hero-slider">
            <div className="col-lg-8  d-flex justify-content-center flex-column">
              <h3 >Get Grocery order </h3>
              <button>View More <ShoppingCart /></button>
            </div>
            <div className="col-lg-4 ">
              <img
                src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img1.png"
                className="carousel-img"
                alt="Slide 1"
              />

            </div>

          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row border rounded p-5 hero-slider">
            <div className="col-lg-8  d-flex justify-content-center flex-column">
              <h3 >Get Grocery order </h3>
              <button>View More <ShoppingCart /></button>
            </div>
            <div className="col-lg-4 ">
              <img
                src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-img1.png"
                className="carousel-img"
                alt="Slide 1"
              />

            </div>

          </div>
        </Carousel.Item>
        {/* Add other Carousel Items here... */}

      </Carousel>
    </div>
  );
}

export default Hero_section;
