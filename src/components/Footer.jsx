import React from "react";
import "./footer.css";
import Insta from "../assets/icons/Insta.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <a
            href="https://www.instagram.com/ferraricortney/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Insta} alt="instagram" />
            <h4>Follow Me</h4>
          </a>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>
            <Link to={"./landing"}>Welcome</Link>
          </p>
          <p>
            {" "}
            <Link to={"./Shop"}>Shop</Link>
          </p>
          <p>
            <Link to={"./Cart"}>Cart</Link>
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Information</h4>
          <p>
            <Link to={"./Terms"}> Terms / Privacy / Conditions</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to={"./About"}>About Me</Link>
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Contact</h4>
          <p>P.O. Box 8204</p>
          <p>Albuquerque NM 87198</p>
          <p>cortneyferrariart@gmail.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2022 CRF-Art All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
