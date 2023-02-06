import React from "react";
import style from '../Styles/productItem.module.css';


export default function Card({title, image, children}){
    return (
        <div className={`${style.card} card mb-3 my-card`}>
            {/* <div className={`${style.cardImage}`}>
                <img src={image} className="card-img-top img-fluid"/>
            </div> */}
            <div className="card-body">
                <h3 className="card-title text-center">{title ? title : ''}</h3>
                {children}
            </div>
        </div>
    )
}