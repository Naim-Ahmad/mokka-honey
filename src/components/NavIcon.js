import React, { useState } from "react"
import ShoppingCard from "../ShoppingCard"

export default function NavIcon(props){

    let [count, setCount] = useState(0)
    
    const handleClick = () =>{
    }
    
    return (
        <div className={props.style}>
            <a href="#user" className="text-decoration-none">
                <i className="fa-solid fa-user fa-1x pe-3"></i>
            </a>
            <span onClick={handleClick}>
                <i className="fa-solid fa-cart-shopping fa-1x position-relative">
                    {count === 0 ? '': <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark card-badge">
                    {count}
                    </span>}
                </i>
            </span>
        <ShoppingCard/>
        </div>
    )
}