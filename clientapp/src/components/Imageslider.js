import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/Imageslider.css';


class Imageslider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="imageslider-img">
          <img src="./images/boat1.jpg" height="450" width="100%" alt="" />
        </div>
        <div className="imageslider-img">
          <img src="./images/boat2.jpg" height="450" width="100%" alt="" />
        </div>
        <div className="imageslider-img">
          <img src="./images/boat3.jpg" height="450" width="100%" alt="" />
        </div>
      </Slider>
    );
  }
}

export default Imageslider;
