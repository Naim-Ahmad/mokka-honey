import React from "react";
import styles from '../../assets/styles/nav.module.css';
import NavIcon from "../NavIcon";

export default function Nav(){
    return (
        <>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#"><i className="fa-solid fa-kaaba"></i> মক্কা হানি</a>

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
                  Mocca Honey
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
                    <a className={`${styles.navLink} ${styles.active}`}
                    aria-current="page" href="#home">হোম</a>
                  </li>
                  
                  <li className="nav-item dropdown">
                    <a
                      className={`${styles.navLink} nav-link dropdown-toggle`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      পণ্য
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">মধু</a></li>
                      <li><a className="dropdown-item" href="#">শরিষার তৈল</a></li>
                      <li>
                        <a className="dropdown-item" href="#">ঘি</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className={`${styles.navLink} nav-link`} href="#">পরিচয়</a>
                  </li>
                  <li className="nav-item">
                    <a className={`${styles.navLink} nav-link`} href="#">সেবা সমূহ</a>
                  </li>
                  <li className="nav-item">
                    <a className={`${styles.navLink} nav-link`} href="#">যোগাযোগ করুন</a>
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