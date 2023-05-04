import React, { useRef, useState } from 'react';
import slide1 from '../../../assets/images/ella-olsson-4dQiaWKiL-Y-unsplash.jpg'
import slide2 from '../../../assets/images/hybrid-storytellers-2M9-LTrpxJw-unsplash.jpg'
import slide3 from '../../../assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import { Col, Container, Row } from 'react-bootstrap';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                loop={true}
            >
                <SwiperSlide>
                    <Container>
                        <Row className='d-flex align-items-center flex-column-reverse flex-md-row'>
                            <Col xs={12} md={6}>

                                <h1 className='pt-4 pt-md-0'>Discover the Bold and Vibrant Flavors of Mexico with Savor Mexican</h1>
                                <p>At Savor Mexican, we believe that cooking should be a fun and exciting adventure. With our easy-to-follow recipes and expert cooking tips, you can learn to create amazing Mexican dishes that will tantalize your taste buds and impress your family and friends. </p>
                                <button className='btn btn-primary mb-4'>Show More</button>

                            </Col>
                            <Col xs={12} md={6}>
                                <img className='w-100 rounded' src={slide1} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Row className='d-flex align-items-center flex-column-reverse flex-md-row'>
                            <Col xs={12} md={6}>

                                <h1 className='pt-4 pt-md-0'>Experience the True Taste of Mexico with Savor Mexican</h1>
                                <p>Are you ready to take your taste buds on a journey to Mexico? Look no further than Savor Mexican, where we specialize in bringing you the most authentic and delicious Mexican recipes. From the bold spices of chiles to the tangy sweetness of tropical fruits, our recipes capture the true essence of Mexican cuisine.</p>
                                <button className='btn btn-primary mb-4'>Show More</button>

                            </Col>
                            <Col xs={12} md={6}>
                                <img className='w-100 rounded' src={slide2} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide><Container>
                    <Row className='d-flex align-items-center flex-column-reverse flex-md-row'>
                        <Col xs={12} md={6}>

                            <h1  className='pt-4 pt-md-0'>Unlock the Secrets of Mexican Cooking with Savor Mexican</h1>
                            <p>Our team of expert chefs has spent years studying and perfecting the art of Mexican cooking, and we're excited to share our knowledge with you. From mastering the perfect tortilla to creating complex spice blends, our recipes and cooking tips will give you the confidence and skills to create truly authentic Mexican dishes.</p>
                            <button className='btn btn-primary mb-4'>Show More</button>

                        </Col>
                        <Col xs={12} md={6}>
                            <img className='w-100 rounded' src={slide3} alt="" />
                        </Col>
                    </Row>
                </Container></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
