import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo/logo.png";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="pt-5 pb-5 ps-5 footer-container bg-light">
      <div className=" logo-text d-flex justify-content-around">
        <div>
          <img style={{ height: "80px" }} src={logo} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="footer-text ">
            <Link to="/about" className="text-decoration-none">
              <p>About Honda Store</p>
            </Link>
            <Link to="/blogs" className="text-decoration-none">
              <p>Blogs of Honda Store</p>
            </Link>

            <Link to="/register" className="text-decoration-none">
              <p>Register to Honda Store</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="copy-right mt-5 d-flex justify-content-around">
        <div>
          <p>
            <small className="copy">Copyright @ {year} Honda App</small>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <small className="me-5">Privacy Policy</small>
          </p>
          <p>
            <small>Terms of Use</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
