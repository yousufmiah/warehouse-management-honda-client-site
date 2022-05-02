import React from "react";
import "./NotFound.css";
import notFoundImg from "../Assets/images/404-error-page-not-found.jpg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
