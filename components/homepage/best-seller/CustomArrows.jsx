import React from 'react';
import { ArrowRight,ArrowLeft } from 'lucide-react';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <ArrowRight color="#fff" fill="#fff"/>
       
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
       <ArrowLeft color="#fff" fill="#fff"/>
     
    </div>
  );
};

export { NextArrow, PrevArrow };
