import React from "react";
import ShoppingCard from "./ShoppingCard";

const checkPackedItems = JSON.parse(localStorage.getItem('packed'));
const packedItems = checkPackedItems ? checkPackedItems : []

export default function NavIcon(props){
  const count = packedItems.length
 
    return (
      <div className={props.style}>
        <a href="#user" className="text-decoration-none">
          <i className="fa-solid fa-user fa-1x pe-3"></i>
        </a>
        <span
          // onClick={handleClick}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="fa-solid fa-cart-shopping fa-1x position-relative">
            {count === 0 ? (
              ''
            ) : (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark card-badge">
                {count}
              </span>
            )}
          </i>
        </span>
        <ShoppingCard />
      </div>
    );
}