import React from "react"
import style from '../Styles/productItem.module.css'

export default function ProductItem({ image, alt, title, description, prevAmount, curAmount, id, onClickHandler }) {
    return (
        
          <div className={`card ${style.card}`}>

            <div className="position-relative">
            <div className={style.productImage}>
              <img src={image} className="card-img-top" alt={alt}/>
            </div>
            <div className={style.cardImg}>
              <i className="fa-solid fa-cart-shopping fa-1x"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            </div>

            <div className="card-body">
              <h4 className="card-title fw-bold my-3">{title}</h4>
              <p className={style.cardText}>
               {description}</p>

              <p><span><s>&#2547; {prevAmount} </s> </span> 
              &#8287;
              <span className="text-warning fw-bold fs-3">&#2547;{curAmount} </span></p>
              <button className="my-btn add-card-btn" id={id} onClick={onClickHandler}>পণ্যটি ব্যাগে রাখুন</button>
            </div>
          </div>
        
    )
}