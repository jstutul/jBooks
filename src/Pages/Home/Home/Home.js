import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from "../../Shared/Header/Header"
import NewArraival from '../NewArraival/NewArraival';
import PopularCategory from '../PopularCategory/PopularCategory';
import SliderImage from '../SliderImage/SliderImage';
const Home = () => {
    return (
        <>
         <Header></Header>
        <SliderImage></SliderImage>
        <PopularCategory></PopularCategory>
        <NewArraival></NewArraival>
        <Footer></Footer>
        </>
       
    );
};

export default Home;