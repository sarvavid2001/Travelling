import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const TopDestination = ({ image, title, link, themeImage }) => {
  return (
    <div
      className="relative group"
      style={{
        width: '100%', // Ensure the container is full width
        maxWidth: '400px', // Set a max width for consistency
        height: '300px', // Set a height to match both images
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `url(${themeImage})`, // Dynamically set the theme image from props
          height: '300px', // Match the height of the image
        }}
      />
      <Link
        to={link}
        className="relative block bg-green-700 p-4 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-105"
        style={{
          width: '100%', // Ensure full width for the link container
          height: '300px', // Match the height of the theme image
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
          style={{ maxHeight: '300px' }} // Set max height to match the theme image
        />
        <div className="absolute bottom-0 left-0 right-0 text-center text-white text-lg italic bg-gray-900 bg-opacity-75 p-2">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default TopDestination;
    