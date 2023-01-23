import React from "react";

export default function Card({title, image, children}){
    return (
        <div className="card mb-3 my-card">
            <img src={image} className="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title text-center">{title ? title : ''}</h3>
                {children}
            </div>
        </div>
    )
}