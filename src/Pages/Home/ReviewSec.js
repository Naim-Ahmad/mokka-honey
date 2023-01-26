import React from "react";
import Section from "../../Components/Section";
import reviews from '../../Data/reviews';
import style from '../../Styles/review.module.css';
import ReviewCard from "./ReviewCard";

export default function ReviewSec(){
    return (
        <Section classSec={style.reviewSec} container={''}>
        <h1 className="text-center mb-5">গ্রাহকরা আমাদের সম্পর্কে কি বলে?</h1>
        <div className={`${style.review} d-flex justify-content-center gap-3 flex-wrap`}>
            {reviews.map(review=>{
                return <ReviewCard key={review.id} {...review}/>
            })}
        </div>
        </Section>
    )
}