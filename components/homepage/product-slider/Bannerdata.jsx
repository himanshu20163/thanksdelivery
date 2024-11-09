import React from 'react'
import { ArrowRight } from 'lucide-react';

const Bannerdata = () => {
    return (
        <div className='getintouchcontainer my-3 py-5'>
            <div class="delivery-section">
                <div class="container container-lg">
                    <div class="delivery position-relative rounded-16 bg-main-600 p-16 flex-align gap-10 flex-wrap z-1">
                        <img src="https://wowtheme7.com/tf/marketpro/assets/images/bg/delivery-bg.png" alt="" class="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100" />
                        <div class="row align-items-center">
                            <div class="col-md-3 d-md-block d-none">
                                <div class="delivery__man text-center aos-init aos-animate" data-aos="fade-down-right">
                                    <img src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/delivery-man.png" />
                                </div>
                            </div>
                            <div class="col-md-5 col-sm-12 my-3">
                                <div class="text-center">
                                    <h4 class="text-white mb-8 aos-init aos-animate" data-aos="fade-down"><strong>We Delivery on Next Day from 10:00 AM to 08:00 PM</strong></h4>
                                    <p class="text-white aos-init aos-animate" data-aos="zoom-in"><strong>For Orders starts from $100</strong></p>
                                    <button class="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8 aos-init aos-animate" data-aos="fade-up" tabindex="0">
                                        Shop Now
                                        <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 d-none d-md-block aos-init aos-animate" data-aos="zoom-out" data-aos-duration="800">
                                <img src='https://wowtheme7.com/tf/marketpro/assets/images/thumbs/special-snacks-img.png' width="350" height="300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannerdata