import React from "react"
import style from '../assets/styles/productItem.module.css'

export default function ProductItem({image, alt, title, description, prevAmount, curAmount}){
    return (
        
          <div className={`card ${style.card}`}>
            <img src={image} className="card-img-top" alt={alt}/>

            <div className={style.cardImg}>
              <i className="fa-solid fa-cart-shopping fa-1x"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="card-body">
              <h4 className="card-title fw-bold my-3">{title}</h4>
              <p className="card-text">
               {description}</p>

              <p><span><s>&#2547; {prevAmount} </s> </span> 
              &#8287;
              <span className="text-warning fw-bold fs-3"> &#2547; {curAmount} </span></p>
              <a href="#" className="my-btn add-card-btn">পণ্যটি ব্যগে রাখুন</a>
            </div>
          </div>
        
    )
}