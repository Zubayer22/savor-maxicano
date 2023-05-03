import React from 'react';
import Chefs from './Chefs';
import Slider from '../Slider/Slider';
import HomeAbout from './HomeAbout';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeAbout></HomeAbout>
            <Chefs></Chefs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;