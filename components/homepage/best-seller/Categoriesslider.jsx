import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CustomArrows";
import "./seller.css"; // Custom styling file

const CategoryCarousel = () => {
  const categories = [
    { name: "Farm", image: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/feature-img10.png", products: "125+ Products" },
    { name: "Wholeshale", image: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/feature-img4.png", products: "125+ Products" },
    { name: "Skilled Resource", image: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/feature-img5.png", products: "125+ Products" },
    { name: "Reals state", image: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/feature-img7.png", products: "125+ Products" },
    { name: "Industrial Capcity", image: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/feature-img8.png", products: "125+ Products" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
<Slider {...settings} className="categories-slider">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="category-image">
            <img src={category.image} alt={category.name} />
          </div>
          <h5>{category.name}</h5>
          <p>{category.products}</p>
        </div>
      ))}
    </Slider>
    </div>
    
  );
};

export default CategoryCarousel;
