import React from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import Product from '../Product/Product';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Services></Services>
            <Product></Product>
        </div>
    );
};

export default Home;