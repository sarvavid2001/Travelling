import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./PreparingTrip.css";

const PreparingTrip = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {/* Close button */}
      <button
        className="absolute top-10 right-4 md:top-20 md:right-40 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close"
        onClick={handleClose}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-32 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Preparing Your Trip
          </h1>
        </div>
      </div>

      <div className="mt-6 md:mt-10 w-full px-4 flex items-center justify-center">
        {/* Skeleton loading effect */}
        <div className="skeleton-container w-full max-w-md px-4">
          <div className="skeleton skeleton-title mb-4"></div>
          <div className="skeleton skeleton-subtitle mb-4"></div>
          <div className="skeleton skeleton-content"></div>
        </div>
      </div>

      {/* Animated Travel Icon */}
      <div className="mt-6 md:mt-10 w-full px-4 flex items-center justify-center">
        <div className="absolute bottom-10 text-center">
          <svg
            className="h-12 w-12 animate-bounce text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 11h6m-3-3v6m-4 4v6m4-6h-8m4 4v6m-4-6H6m2 0H4"
            />
          </svg>
          <p className="text-gray-600 text-sm mb-40">
            Hold tight, we’re getting things ready!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreparingTrip;
