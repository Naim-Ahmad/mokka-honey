import React from "react";
import kaloJiraoil from '../../assets/images/কালোজিরার-তেল.png';
import Card from "../Card";
import Carousel from "../Carousel";
import Section from "./Section";

export default function LatestProduct(){
    return(
        <Section classSec={'bg-dark'} container={'container'}>
             
            <h1 className="text-center common-color fw-bolder mb-5">শীঘ্রই আসছে</h1>
            <Carousel>
                <div className="carousel-item active">
                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
                    <Card image={kaloJiraoil} title="কালোজিরা"/>
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