import React, { useState, useEffect } from 'react';
import './HeroSection.css';

// Import images

import image1 from '/src/assets/kunda.jpeg';
import image2 from '/src/assets/mountains.jpeg';
import image3 from '/src/assets/villageimage.jpeg';

const images = [image1, image2, image3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Image change interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Explore the Beauty of Nepal</h1>
        <p>Discover stories, travel guides, and cultural insights.</p>
      </div>
      <img
        src={images[currentImageIndex]}
        alt="Nepal"
        className="hero-image"
      />
    </div>
  );
}

export default HeroSection;
