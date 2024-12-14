import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import "./index.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerLeft">
          <img
            className="footerLogo"
            src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733234065/auxyl6nmupqost9dtgcb.png"
          />
          <p>
            Team 100plus academy is determined to take students to the right
            path and by creating healthy peer learning environment and promote
            student teacher interaction.
          </p>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733299998/g6w26c8bqwekyhhs0wmq.png" />
            <ul className="mt-3 d-flex flex-row list-unstyled">
              <li className="border border-white rounded-circle me-4">
                <FaTwitter size={18} className="m-1 " />
              </li>
              <li className="border border-white rounded-circle me-4">
                <TiSocialFacebook size={20} className="m-1 " />
              </li>
              <li className="border border-white rounded-circle me-4">
                <FaInstagram size={20} className="m-1 " />
              </li>
              <li className="border border-white rounded-circle me-4">
                <FaYoutube size={20} className="m-1 " />
              </li>
            </ul>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerLinks">
            <h1 className="footerheaders">Useful links</h1>
            <ul className="footerList">
              <li>Class 12 PCM Crash Course (CBSE/ICSE)</li>
              <li>Class 12 PCM Full-Year Program (CBSE/ICSE)</li>
              <li>Crash Course for NEET</li>
              <li>NEET Droppers Batch</li>
            </ul>
          </div>
          <div className="footerLinks">
            <h1 className="footerheaders">Popular Courses</h1>
            <ul className="footerList">
              <li>Foundation</li>
              <li>Life Skill Courses</li>
              <li>Senior</li>
              <li>Yoga and Meditation</li>
            </ul>
          </div>
          <div className="footerLinks">
            <h1 className="footerheaders">Help & Support</h1>
            <ul className="footerList">
              <li>About Us</li>
              <li>Content</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#272727",
          color: "white",
          borderTop: "1px solid black",
        }}
        className="d-flex flex-row justify-content-around"
      >
        <p className="mt-3 ">
          <span style={{ color: "#e62129" }}>100 Plus Academy</span> © 2024 |
          EduZephyr Education Services Pvt Ltd.
        </p>
        <p className="mt-3 ">
          Crafted with ♥
          <span style={{ color: "#e62129" }}> by Growth Climb</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
