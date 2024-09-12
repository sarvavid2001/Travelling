import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Interests from "./Interest";

const DateRangePicker = ({ onPrev, onNext }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showInterest, setShowInterest] = useState(false); // State to control showing Interests component

  const handleClose = () => {
    window.location.href = "/";
  };

  // Validation: ensure at least the start date is selected
  const isValidInput = () => {
    return !!startDate; // Check if a start date has been selected
  };

  // Handle Next button click
  const handleNext = () => {
    if (isValidInput()) {
      setShowInterest(true); // Show the Interests component if the input is valid
    }
  };

  // Function to skip date selection
  const handleSkipDates = () => {
    onNext(); // Call onNext to move to the next section without selecting a date
  };

  // If Interests should be shown, render it instead
  if (showInterest) {
    return <Interests onPrev={onPrev} />;
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
          <h1 className="text-2xl md:text-3xl font-semibold">When are you going?</h1>
          <p className="text-sm md:text-xl mt-3 md:mt-5 text-gray-500 font-light">
            Choose a date range, up to 7 days.
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 w-full px-4 flex items-center justify-center flex-col">
        <div className="relative w-full max-w-2xl">
          <DatePicker
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            className="w-full border border-gray-300 rounded-lg shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        {/* Skip Dates text */}
        <p
          className="mt-4 text-blue-500 cursor-pointer underline"
          aria-label="Skip Dates"
          onClick={handleSkipDates}
        >
          I don't know yet
        </p>
      </div>

      {/* Prev button */}
      <button
        className="absolute bottom-20 left-5 md:bottom-40 md:left-80 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Previous"
        onClick={onPrev}
      >
        Previous
      </button>

      {/* Next button */}
      <button
        className={`absolute bottom-20 right-5 md:bottom-40 md:right-80 px-4 py-2 rounded-full shadow-lg transition-colors ${
          !isValidInput() ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        aria-label="Next"
        disabled={!isValidInput()} // Disable if no start date is selected
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default DateRangePicker;
