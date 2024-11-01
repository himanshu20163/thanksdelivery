"use client";

import Image from 'next/image';
import React from 'react';

import leafImg from '@/app/assets/images/shapes/leaf.png';
import slider1LeafImg from '@/app/assets/images/shapes/slider-1-leaf.png';
import slider1Bg1 from '@/app/assets/images/backgrounds/slider-1-1.jpg';
import slider1Bg2 from '@/app/assets/images/backgrounds/slider-1-2.jpg';
import slider1Bg3 from '@/app/assets/images/backgrounds/slider-1-3.jpg';
import shape1 from '@/app/assets/images/shapes/slider-1-shape-1.png';
import shape2 from '@/app/assets/images/shapes/slider-1-shape-2.png';
import shape3 from '@/app/assets/images/shapes/slider-1-shape-3.png';

const Demopage = () => {
    return (
        <div>
            <section className="main-slider-one">
                <div className="main-slider-one__carousel alefox-owl__carousel owl-carousel" data-owl-options='{
                    "loop": true,
                    "animateOut": "fadeOut",
                    "animateIn": "fadeIn",
                    "items": 1,
                    "autoplay": true,
                    "autoplayTimeout": 7000,
                    "smartSpeed": 1000,
                    "nav": false,
                    "dots": true,
                    "margin": 0
                }'>
                    {[slider1Bg1, slider1Bg2, slider1Bg3].map((background, index) => (
                        <div className="item" key={index}>
                            <div className="main-slider-one__item">
                                <div className="container">
                                    <div className="main-slider-one__content">
                                        <h5 className="main-slider-one__sub-title">
                                            <span className="sec-title__tagline__left-leaf">
                                                <Image src={leafImg} alt="leaf" />
                                            </span>
                                            Welcome to <span>Alefox!</span>
                                        </h5>
                                        <h2 className="main-slider-one__title">
                                            <span className="main-slider-one__title__leaf">
                                                <Image src={slider1LeafImg} alt="slider leaf" />
                                            </span>
                                            We Organic Food<br /> Agriculture Healthy.
                                        </h2>
                                        <p className="main-slider-one__text">
                                            Poor can only be as strong as our people & because of team<br /> have designed game changing products.
                                        </p>
                                        <div className="main-slider-one__btn">
                                            <a href="products.html" className="alefox-btn">
                                                <span className="alefox-btn__item"></span>
                                                <span className="alefox-btn__item"></span>
                                                <span className="alefox-btn__item"></span>
                                                <span className="alefox-btn__item"></span>
                                                Discover More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-slider-one__layer">
                                    <Image src={background} alt="slider background" layout="fill" objectFit="cover" />
                                </div>
                                <div className="main-slider-one__shape-one">
                                    <Image src={shape1} alt="shape one" />
                                </div>
                                <div className="main-slider-one__shape-two">
                                    <Image src={shape2} alt="shape two" />
                                </div>
                                <div className="main-slider-one__shape-three">
                                    <Image src={shape3} alt="shape three" />
                                </div>
                                <div className="main-slider-one__discount">
                                    <span>25%</span> Discounts
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Demopage;
