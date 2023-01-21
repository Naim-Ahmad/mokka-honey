import React from "react";
import style from '../../styles/review.module.css';

export default function ReviewCard({image, alt, reviewText, name, person}){
    return (
        <div className={`${style.reviewCard} card text-center`}>
            <div className="card-body">
              <div>
                <i className="fa-solid fa-quote-left text-warning fa-3x mb-3"></i>
              </div>
              <p>
                {reviewText}
              </p>
              <div className="w-50 h-25 m-auto">
                <img src={image} className="rounded-circle" alt={alt}/>
              </div>
              <blockquote className="pt-5">
                {name}
                <cite>
                  {person}
                </cite>
              </blockquote>
            </div>
          </div>
    )
}