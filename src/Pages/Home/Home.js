import React from "react";
import Footer from "../../Layouts/Footer";
import Header from '../../Layouts/Header';
import Nav from '../../Layouts/NavBar';
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import LatestProduct from "./LatestProduct";
import ProductSection from "./ProductSection";
import ReviewSec from './ReviewSec';

export default function Home(){
    return(
    <>
        <Nav />
        <Header/>
        <AboutSection />
        <ProductSection/>
        <LatestProduct />
        <ReviewSec />
        <ContactSection />
        <Footer/>
    </>    
    )
}