import React from "react";
// import kaloJirarModhu from '../../assets/images/কালোজিরার-মধু.png';
import kaloJiraoil from '../../assets/images/কালোজিরার-তেল.png';
import ghe from '../../assets/images/ঘি.jpg';
import lichuFulerModhu from '../../assets/images/লিচু-ফুলের-মধু.png';
import sundorBonerModhu from '../../assets/images/সুন্দরবনের-মধু.png';
import style from '../../assets/styles/productItem.module.css';
import ProductItem from "../ProductItem";
import Section from "./Section";

export default function ProductSection(){
    return (
        <Section classSec={''} container={''}>
            <h1 className="text-center mb-5 common-color fw-bolder">আমাদের পণ্য সামগ্রী</h1>
            <div className={`${style.productItem} d-flex gap-4 justify-content-center`}>
                {/* <ProductItem image={kaloJirarModhu} alt={'কালো জিরার মধু'} title={'কালো জিরার মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি কালোজিরার মধু"} prevAmount={'700'} curAmount="500"/> */}
                <ProductItem image={sundorBonerModhu} alt={'কালো জিরা'} title={'সুন্দরবনের মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা বানানো সুস্বাদু ঘী"} prevAmount={'700'} curAmount={"500"}/>

                <ProductItem image={ghe} alt={'ঘি'} title={'বাড়িতে তৈরি'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি সুন্দরবনের মধু"} prevAmount={'700'} curAmount={"500"}/>
                <ProductItem image={kaloJiraoil} alt={'কালোজিরা'} title={'কালোজিরার তৈল'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি সুন্দরবনের মধু"} prevAmount={'700'} curAmount={"500"}/>

                <ProductItem image={lichuFulerModhu} alt={'কালো জিরা'} title={'লিচু ফুলের মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি লিচু ফুলের মধু"} prevAmount={'700'} curAmount="500"/>
                
                {/* <ProductItem image={boroiFulerModhu} alt={'কালো জিরা'} title={'বরই ফুলের মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি বরই ফুলের মধু"} prevAmount={'700'} curAmount="500"/> */}
            </div>
        </Section>
    )
}
