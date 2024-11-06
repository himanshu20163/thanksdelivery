import React, { useState } from 'react'
import './seller.css';
import { Whatsapp, Linkedin, CameraVideo } from 'react-bootstrap-icons';
const Demoseller = () => {
    const [card_Size, Setcard_Size] = useState('20');
    return (
        <div className='vendor-card-wrapper'>
            <div class="vendor-card text-center px-16 pb-24">
                <div class="">
                    <img src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo1.png" alt="" class="vendor-card__logo m-12" />
                    <h6 class="title mt-32">Organic Market</h6>
                    <span class="text-heading text-sm d-block">Delivery by 6:15am</span>
                    <a href="shop.html" class="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                </div>
                
                <div class="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                    <div class="vendor-card__item bg-white rounded-circle flex-center">
                        <Whatsapp className='m-3' size={card_Size} color='#000' />
                    </div>
                    <div class="vendor-card__item bg-white rounded-circle flex-center">
                        <Linkedin className='m-3' size={card_Size} color='#000' />
                    </div>
                    <div class="vendor-card__item bg-white rounded-circle flex-center">
                        <CameraVideo className='m-3' size={card_Size} color='#000' />
                    </div>
                    <div class="vendor-card__item bg-white rounded-circle flex-center">
                        <Whatsapp className='m-3' size={card_Size} color='#000' />
                    </div>
                    <div class="vendor-card__item bg-white rounded-circle flex-center">
                        <Linkedin className='m-3' size={card_Size} color='#000' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Demoseller
