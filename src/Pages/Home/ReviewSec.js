import React from "react";
import image from '../../Assets/naim-ahmad-picture-min.png';
import Section from "../../Components/Section";
import style from '../../Styles/review.module.css';
import ReviewCard from "./ReviewCard";

const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dicta provident nihil! Officia perspiciatis enim adipisci, repudiandae totam quidem? Delectus iure quam corporis odit temporibus possimus eligendi porro architecto eum.'

export default function ReviewSec(){
    return (
        <Section classSec={style.reviewSec} container={''}>
        <h1 className="text-center mb-5">গ্রাহকরা আমাদের সম্পর্কে কি বলে?</h1>
        <div className={`${style.review} d-flex justify-content-center gap-3 flex-wrap`}>
            <ReviewCard image={image} alt={'Naim Ahmad'} reviewText={text} name={'Naim Ahmad'} person={'front-end developer'}/>
            
            <ReviewCard image={image} alt={'Naim Ahmad'} reviewText={text} name={'Naim Ahmad'} person={'front-end developer'}/>

            <ReviewCard image={image} alt={'Naim Ahmad'} reviewText={text} name={'Naim Ahmad'} person={'front-end developer'}/>

            <ReviewCard image={image} alt={'Naim Ahmad'} reviewText={text} name={'Naim Ahmad'} person={'front-end developer'}/>

        </div>
        </Section>
    )
}