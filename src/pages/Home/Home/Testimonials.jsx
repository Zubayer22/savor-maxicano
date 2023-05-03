import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Container } from "react-bootstrap";

const Testimonials = () => {
    return (
        <Container className="py-5">
            <h1 className="text-center">What our customer say?</h1>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><p className="text-center" style={{padding:'0px 20%'}}>"I was looking for authentic Mexican recipes to make at home and stumbled upon this website. The recipes are easy to follow and produce amazing results. I've tried several of them now and they've all been a hit with my family. Thanks for helping me bring some Mexican flavor into my home cooking!"<br/><br/><b>- Emily M</b></p> </SwiperSlide>
                <SwiperSlide><p className="text-center" style={{padding:'0px 20%'}}>"I'm a big fan of Mexican cuisine and I have to say, this website has some of the best recipes I've ever tried. The flavors are spot on and the ingredients are easy to find at my local grocery store. I've recommended this site to all my friends who love Mexican food!" <br/><br/><b>- Mike P</b></p> </SwiperSlide>
                <SwiperSlide><p className="text-center" style={{padding:'0px 20%'}}>"I'm a Mexican-American who grew up with homemade Mexican food, and I have to say, these recipes are the real deal. They taste just like my abuelita used to make! I appreciate the attention to detail and the use of authentic ingredients. Keep up the great work!"<br/><br/><b>- Carlos R</b></p> </SwiperSlide>
                <SwiperSlide><p className="text-center" style={{padding:'0px 20%'}}>"As someone who loves to cook but isn't very familiar with Mexican cuisine, this website has been a godsend. The recipes are easy to follow and the photos are so helpful in knowing what the end result should look like. I've tried several recipes now and they've all been a hit with my family. Thank you for making Mexican cooking accessible to everyone!"<br/><br/><b>- Lisa W.</b></p> </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Testimonials;