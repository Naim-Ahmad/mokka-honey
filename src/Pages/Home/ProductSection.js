import React from "react";
// import kaloJirarModhu from '../../assets/কালোজিরার-মধু.png';
import kaloJiraoil from '../../assets/কালোজিরার-তেল.png';
import ghe from '../../assets/ঘি.jpg';
import lichuFulerModhu from '../../assets/লিচু-ফুলের-মধু.png';
import sundorBonerModhu from '../../assets/সুন্দরবনের-মধু.png';
import ProductItem from "../../components/ProductItem";
import Section from "../../components/Section";
import style from '../../styles/productItem.module.css';

export default function ProductSection(){
    return (
        <Section classSec={''} container={''}>
            <h1 className="text-center mb-5 common-color fw-bolder">আমাদের পণ্য সামগ্রী</h1>
            <div className={`${style.productItem} d-flex gap-4 justify-content-center`}>
                {/* <ProductItem image={kaloJirarModhu} alt={'কালো জিরার মধু'} title={'কালো জিরার মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি কালোজিরার মধু"} prevAmount={'700'} curAmount="500"/> */}
                <ProductItem image={sundorBonerModhu} alt={'সুন্দরবনের মধু'} title={'সুন্দরবনের মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত সুন্দরবনের মধু"} prevAmount={'1500'} curAmount={"1200"}/>

                <ProductItem image={ghe} alt={'ঘি'} title={'গাওয়া ঘি'} description={"আমাদের নিজস্ব কর্মী দ্বারা বানানো সুস্বাদু ঘি"} prevAmount={'1600'} curAmount={"1500"}/>
                <ProductItem image={kaloJiraoil} alt={'কালোজিরার তেল'} title={'কালোজিরার তৈল'} description={"আমাদের ফ্যাক্টরিতে বানানো কালোজিরার তেল"} prevAmount={'170'} curAmount={"150"}/>

                <ProductItem image={lichuFulerModhu} alt={'লিচু ফুলের মধু'} title={'লিচু ফুলের মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি লিচু ফুলের মধু"} prevAmount={'700'} curAmount="600"/>
                
                {/* <ProductItem image={boroiFulerModhu} alt={'কালো জিরা'} title={'বরই ফুলের মধু'} description={"আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত খাঁটি বরই ফুলের মধু"} prevAmount={'700'} curAmount="500"/> */}
            </div>
        </Section>
    )
}
