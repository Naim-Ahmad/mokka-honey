import React from "react";
import Header from '../../Layouts/Header';
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import LatestProduct from "./LatestProduct";
import ProductSection from "./ProductSection";
import ReviewSec from './ReviewSec';

export default function Home(){
    return(
        <>
            <Header/>
            <AboutSection />
            <ProductSection />
            <LatestProduct />
            <ReviewSec />
            <ContactSection />
        </>    
    )
}