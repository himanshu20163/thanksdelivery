import React from 'react'
import Hero_section from './hero-section';
import Our_supporter from './our-supporter';
import Testimonial_container from './testimonial';
import Bestseller from './best-seller/ProductCard';
import SellerCard from './best-seller/Sellercard';
import Productslider from './product-slider/Productslider';
import Demoslider from './product-slider/Demoslider';

const Homepage = () => {

  return (
    <div>
      <Hero_section />
      {/* <Bestseller /> */}
      <SellerCard />
      {/* <Productslider /> */}
      <Demoslider />
    </div>
  )
}
export default Homepage;
