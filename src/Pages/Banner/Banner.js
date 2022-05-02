import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../Assets/images/banner/banner1.jpg";
import banner2 from "../../Assets/images/banner/banner2.jpg";
import banner3 from "../../Assets/images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner-img">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="title-size">
              <h1>Honda1</h1>
              <p>It is very easy to Drive.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <div className="title-size">
              <h1>Honda2</h1>
              <p> easy to Drive in the road. </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <div className="title-size">
              <h1>Honda3</h1>
              <p> Driving is very comfort. </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
