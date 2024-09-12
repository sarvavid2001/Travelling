import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./planyourtrip.css";
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
import planyourtripimage from "/home/rabinam/Desktop/Travelling/frontend/src/assets/planyourtrip.png"; 
import planyourtriptwo from "/home/rabinam/Desktop/Travelling/frontend/src/assets/plantrip2.png";

const PlanYourTrip = () => {
    const navigate = useNavigate(); // Use navigate
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handlePlanTrip = () => {
    navigate("/planning"); // Navigate to the desired page
  };

  return (
    <section className="plan-your-trip">
      <div className="plan-content">
        <h1>Personalize Every Moment</h1>
        <h2>Journey through nature, curated to your spirit.</h2>
        <p>Find breathtaking landscapes, hidden gems, and experiences—tailored to your love for the outdoors.</p>
        <button onClick={handlePlanTrip} className="cta-button">Plan Your Trip</button>
      </div>

      <div className="plan-image">
        <Slider {...settings}>
          <div className="trip-image">
            <img src={planyourtripimage} alt="Nature Mockup 1" />
          </div>
          <div className="trip-image">
            <img src={planyourtriptwo} alt="Nature Mockup 2" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PlanYourTrip;
