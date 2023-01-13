import React from "react";
import { Link } from "react-router-dom";
import sundorbonImg from '../../assets/images/pbg-pb110417.jpg';
import image from '../../assets/images/sundorbon.jpg';
import style from '../../assets/styles/about.module.css';
import Section from "./Section";

export default function AboutSection(){
    return (
        <Section classSec={'sec-p bg-dark text-white'} container={'p-5 d-md-flex align-items-center'}>
            <div className={`mb-5 me-3 ${style.sImg}`}>
                <img className="rounded" src={image} alt="সুন্দরবন মধু" />
            </div>

            <div className={`${style.aboutText} mx-3`}>
                <h2>আমাদের সম্পর্কে</h2>
                <p>আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ! আমাদের বাসা সাতক্ষীরায়, আমরা সুন্দরবন থেকে মধু সংগ্রহ করি, আলহামদুলিল্লাহ! পুরা দেশ জুড়ে  আমাদের মধু সাপ্লাই হচ্ছে । আমাদের কাছে আপনি সুন্দরবনের খলিশা ফুল  ও গরান ফুলের মধু পাবেন, এবং আরো পাচ্ছেন বড়ই ফুলের মধু, লিচু ফুলের মধু, কালোজিরা ফুলের মধু, সরিষা ফুলের মধু,  এগুলো প্রসেস নন প্রসেস সবরকম পাবেন, এবং বিশ্বস্ত নির্ভরযোগ্য কালেক্টের মাধ্যমে গ্রামীণ চাকের মধু সাপ্লাই করি। </p>
                <Link to="../Pages/About" className="my-btn mb-5">আরো জানুন</Link> 
            </div>

            <div className={`mb-5 s-img ms-3 ${style.mXs}`}> 
                <img  className="rounded" src={sundorbonImg} alt="সুন্দরবন মধু"/>
            </div>
        </Section>
    )
}