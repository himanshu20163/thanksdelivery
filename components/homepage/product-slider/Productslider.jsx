"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./product-slider.css";

import { Zoom, Navigation, Pagination } from "swiper/modules";

const MyCarousel = () => {
  const options = {
    items: 4,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };

  return (
    <div className="p-4">
      <div class="three">
        <h1>Our Products</h1>
      </div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4}
        className="mySwiper"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div class="contentBx">
                <h2>Nike Shoes</h2>

                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#" className="m-2">
                  Buy Now
                </a>
                <a href="#" className="m-2">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="banner-img d-flex justify-content-center">
         <h2>this is heading</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi delectus minus quas nobis neque officia nemo amet deserunt deleniti ex aut maxime aliquid iste, aspernatur soluta consequuntur est quo, esse itaque voluptatibus cumque labore! Aut sed voluptate rem libero alias? Incidunt earum odit ullam eius numquam? Molestias cum repellendus aspernatur!</p>
      </div>
    </div>
  );
};

export default MyCarousel;
