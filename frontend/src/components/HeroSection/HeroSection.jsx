import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HeroSection.css";

// Import images
import image1 from "/src/assets/kunda.jpeg";
import image2 from "/src/assets/mountains.jpeg";
import image3 from "/src/assets/villageimage.jpeg";

const images = [image1, image2, image3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Use navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Image change interval

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleDiscoverMore = () => {
    navigate("/discover"); // Navigate to the desired page
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="fade-in-text">Explore the Beauty of Nepal</h1>
        <p className="fade-in-text">Discover stories, travel guides, and cultural insights.</p>
        
        {/* Call handleDiscoverMore when button is clicked */}
        <button onClick={handleDiscoverMore} className="hero-btn">Discover More</button>
      </div>
      <img src={images[currentImageIndex]} alt="Nepal" className="hero-image slide-in" />

      {/* Navigation Dots */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
