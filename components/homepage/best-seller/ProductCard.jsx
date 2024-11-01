"use client";
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './seller.css';
import { Search , Heart ,ArrowLeftRight,Instagram   } from 'lucide-react';
import { Whatsapp ,Linkedin,CameraVideo } from 'react-bootstrap-icons';

const ProductCard = ({ title, image }) => {
  const [card_Size,Setcard_Size]= useState('20');
  return (
     <article className='seller-card d-flex justify-content-center align-items-center'>
  <figure className='seller-img-figure'><img className='seller-img' src="https://assets.codepen.io/605876/person.png" alt="" />
  <h2>Mike's mindful <br />morning</h2>
  <div className='text-end'>
  <span className=''><Whatsapp className='m-3' size={card_Size} color='#fff'/></span>
  <Linkedin className='m-3'size={card_Size} color='#fff'/>
  <CameraVideo className='m-3' size={card_Size}  color='#fff'/>
  </div>
  </figure>
  
</article>
  );
};

export default ProductCard;
