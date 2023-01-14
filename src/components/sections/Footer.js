import React from "react";
import paymentMethod from '../../assets/images/paymentsnew-bd.png';

export default function Footer(){
    return (
        <footer>
        <div className="container">
          <div className="row text-left">
            <div className="col-lg-3 py-2 text-lg-start">
              <a href="">
                <i className="fa-brands common-color fa-2x pe-2 fa-facebook"></i>
              </a>
             <a href="">
              <i className="fa-brands common-color fa-2x pe-2 fa-youtube"></i>
             </a>
              <a href="">
                <i className="fa-brands common-color fa-2x pe-2 fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands common-color fa-2x pe-2 fa-instagram"></i>
              </a>
            </div>
            <div className="col-lg-5 py-2">
              <p className="text-secondary">Copyright &copy; All rights reserved. | Developed By <a className="fw-bold" href="https://naim-ahmad.netlify.app/">Naim Ahmad</a></p>
            </div>
            <div className="col-lg-4 py-2">
              <span className="fw-bolder">We Accept</span>
              <img className="w-75 ms-2" src={paymentMethod} alt="Payment Method"/>
            </div>
          </div>
        </div>
      </footer>
    )
}