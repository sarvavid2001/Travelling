import React, { useState } from "react";
import TripDays from "./TripDays"; // Import the TripDays component

const Planning = () => {
  const [showTripDays, setShowTripDays] = useState(false); // State to manage which component to show
  const [destination, setDestination] = useState(""); // State to track the input value

  // Function to handle the close button click
  const handleClose = () => {
    window.location.href = "/";
  };

  // Function to handle the Next button click
  const handleNext = () => {
    if (isValidInput()) {
      setShowTripDays(true); // Show the TripDays component
    }
  };

  // Function to handle going back to Planning from TripDays
  const handlePrev = () => {
    setShowTripDays(false); // Show the Planning component
  };

  // Function to check if the input is valid (at least 3 letters)
  const isValidInput = () => {
    const letterCount = destination.replace(/[^a-zA-Z]/g, "").length; // Count letters only
    console.log("Destination:", destination); // Debugging
    console.log("Letter count:", letterCount); // Debugging
    return letterCount >= 3;
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setDestination(e.target.value);
  };

  // Function to handle pressing Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isValidInput()) {
      handleNext();
    }
  };

  // Conditional rendering based on state
  if (showTripDays) {
    return <TripDays onPrev={handlePrev} />;
  }

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
            Where do you want to go?
          </h1>
          <p className="text-sm md:text-xl mt-3 md:mt-5 text-gray-500 font-light">
            Search or get inspired by popular destinations.
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 w-full px-4 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0 6 6 0 01-12 0zm8 8a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            value={destination}
            placeholder="Search your destination"
            className="form-input mt-1 block w-full rounded-full py-3 pl-10 pr-6 border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      {/* Next button */}
      <button
        className={`absolute bottom-20 right-5 md:bottom-40 md:right-80 px-4 py-2 rounded-full shadow-lg transition-colors ${
          isValidInput()
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        aria-label="Next"
        onClick={handleNext}
        disabled={!isValidInput()}
      >
        Next
      </button>
    </div>
  );
};

export default Planning;
