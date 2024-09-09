import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ArticleBanner = ({ id, image, title, description, link, overlayText, themeImage }) => {
  return (
    <div
      className="container mx-auto py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${themeImage})`, // Dynamically set the theme image from props
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 relative bg-green-700 p-4 rounded-lg transform transition-transform duration-500 hover:scale-105">
          <img
            src={image} // Image specific to each article
            alt={title}
            className="w-full h-[300px] lg:h-[450px] object-cover rounded-lg transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute bottom-4 right-4 text-white text-lg italic bg-gray-700 px-3 py-1 rounded-md transition-opacity duration-300 hover:opacity-80">
            {overlayText}
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center p-4 rounded-lg bg-white shadow-lg transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">{title}</h2>
          <p className="text-base lg:text-lg text-gray-700 mb-4">{description}</p>

          {/* Use Link for navigation to the article detail page */}
          <Link to={link} className="inline-flex bg-green-600 text-white py-2 px-4 rounded-lg text-sm lg:text-base hover:bg-green-700 transition-colors duration-300">
            Read More <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleBanner;
