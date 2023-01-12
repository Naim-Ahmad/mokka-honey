import React from "react";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Header from '../sections/Header';
import LatestProduct from "../sections/LatestProduct";
import Nav from '../sections/Nav';
import ProductSection from "../sections/ProductSection";

export default function Home(){
    return(
    <>
        <Nav />
        <Header/>
        <AboutSection />
        <ProductSection/>
        <LatestProduct />
        <ContactSection />
        <Footer/>
    </>    
    )
}