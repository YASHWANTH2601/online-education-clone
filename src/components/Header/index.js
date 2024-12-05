/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "./index.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAndroid } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="banner">
        <div>
          <p className="mb-0">info@plusacademys.com | +91 1234 5678</p>
        </div>
        <div>
          <FaTwitter size={18} className="me-3" />
          <CiFacebook size={20} className="me-3" />
          <FaInstagram size={20} className="me-3" />
          <FaYoutube size={20} className="me-3" />
        </div>
      </div>
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <marquee className="marquee" direction="left">
          HIPSAT-Scholarship admission test starting from 16th November,2024.
          <span style={{ color: "#333" }}> REGISTER NOW</span>
        </marquee>
        <div>
          <div className="mobileView">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <Link to="/">
                  <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733234065/auxyl6nmupqost9dtgcb.png" />
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/courses">courses</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/services">services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="desktopView">
            <div>
              <Link to="/">
                <img
                  className="logo"
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733234065/auxyl6nmupqost9dtgcb.png"
                />
              </Link>
            </div>
            <ul className="d-flex juctify-content-between list-unstyled align-items-center text-decoration-none">
              <li className="me-3 fs-5 ">
                <Link className="text-dark text-decoration-none " to="/">
                  Home
                </Link>
              </li>
              <li className="me-3 fs-5">
                <Link className="text-dark text-decoration-none" to="/courses">
                  courses
                </Link>
              </li>
              <li className="me-3 fs-5">
                <Link className="text-dark text-decoration-none" to="/services">
                  services
                </Link>
              </li>
            </ul>
            <div className="androidButton">
              <FaAndroid size={25} className="me-2" />
              Download App
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
