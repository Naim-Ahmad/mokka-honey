import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../../assets/styles/nav.module.css';
import NavIcon from "../NavIcon";

export default function Nav(){
  let active = {
    color: '#eeba1f',
  }
    return (
        <>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/"><i className="fa-solid fa-kaaba"></i> মক্কা হানি</NavLink>

            <NavIcon style={styles.iconLeft}/>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  মক্কা হানি এন্ড ফুড
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink className={`${styles.navLink}`} style={({isActive})=>isActive ? active:undefined}
                    aria-current="page" to="/">হোম</NavLink>
                  </li>
                  
                  <li className="nav-item dropdown">
                    <NavLink
                      className={`${styles.navLink} nav-link dropdown-toggle`}
                      style={({isActive})=>isActive ? active:undefined}
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      পণ্য
                    </NavLink>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><NavLink className="dropdown-item" style={({isActive})=>isActive ? active:undefined} to="#">মধু</NavLink></li>
                      <li><NavLink className="dropdown-item" style={({isActive})=>isActive ? active:undefined} to="#">শরিষার তৈল</NavLink></li>
                      <li>
                        <NavLink className="dropdown-item" style={({isActive})=>isActive ? active:undefined} to="#">ঘি</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`${styles.navLink} nav-link`} style={({isActive})=>isActive ? active:undefined} to="../Pages/About">পরিচয়</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`${styles.navLink} nav-link`} style={({isActive})=>isActive ? active:undefined} to="#">সেবা সমূহ</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`${styles.navLink} nav-link`} style={({isActive})=>isActive ? active:undefined} to="#">যোগাযোগ করুন</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavIcon style={styles.iconRight}/>
            
          </div>
        </nav>
      </>
    )
}