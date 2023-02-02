import React from "react";
import kaloJiraoil from '../../Assets/কালোজিরার-তেল.png';
import gurImg from '../../Assets/গুড়.jpg';
import Card from "../../Components/Card";
import Carousel from "../../Components/Carousel";
import Section from "../../Components/Section";


export default function LatestProduct(){
    return(
        <Section classSec={'bg-dark'} container={'container'}>
             
            <h1 className="text-center common-color fw-bolder mb-5">শীঘ্রই আসছে</h1>
            <Carousel>
                <div className="carousel-item active">
                    <div className={`d-flex gap-4 justify-content-center flex-wrap`}>
                        <Card image={kaloJiraoil} title="কালোজিরা"/>
                        <Card image={gurImg} title="গুড়"/>
                        <Card image={kaloJiraoil} title="কালোজিরা"/>
                        <Card image={kaloJiraoil} title="কালোজিরা"/>
                    </div>
                </div>
                {/* <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center gap-4">
                <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center gap-4">
                <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    </div>
                </div> */}
            </Carousel>

           
        </Section>
    )   
}