import React from "react";
import temple from "/home/rabinam/Desktop/Travelling/frontend/src/assets/temple.jpg";
import "./BlogList.css";

const AdventureBanner = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
        {/* Left section (Image) */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0 relative">
          <img
            src={temple}
            alt="Adventure"
            className="w-full h-[300px] lg:h-[450px] object-cover rounded-lg"
          />
          {/* Optional text overlay positioned in the bottom-right */}
          <div className="absolute bottom-4 right-4 text-white text-lg italic bg-gray-700 px-3 py-1 rounded-md">
            It's time for another adventure
          </div>
        </div>

        {/* Center section (Text) */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            New Paths to Discover.
          </h2>
          <p className="text-base lg:text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right section (Button) */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <a
            href="/read-more"
            className="inline-flex bg-green-600 text-white py-2 px-4 rounded-lg text-sm lg:text-base hover:bg-green-700"
          >
            Read More <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdventureBanner;
