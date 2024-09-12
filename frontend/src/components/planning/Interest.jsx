import React, { useState } from 'react';
import './Interests.css';
import PreparingTrip from './PreparingTrip';

const interestsList = [
  'Must-see Attractions',
  'Great Food',
  'Hidden Gems',
  'Historical Landmarks',
  'Art Galleries',
  'Rafting',
  'Street Shopping',
  'Yoga and Meditation Retreats',
  'Culture',
  'Wine & Beer',
  'Outdoors',
  'Adventure and Sports',
  'Arts & Theatre'
];

const Interests = ({ onPrev, onNext, startDate, endDate }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if submitting

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true); // Show the skeleton loader

    // Collect all the data you want to submit
    const submissionData = {
      startDate,
      endDate,
      selectedInterests,
    };

    console.log('Submission Data:', submissionData);

    // Simulate a delay (e.g., fetching trip suggestions)
    setTimeout(() => {
      onNext(); // Proceed to the next step
    }, 3000); // 3 second delay for demo purposes
  };

  const handleClose = () => {
    window.location.href = '/';
  };

  // If submitting, show the skeleton loader
  if (isSubmitting) {
    return <PreparingTrip />;
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
            Tell us what you're interested in
          </h1>
          <p className="mt-4 text-gray-600">Select all that apply.</p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 w-full px-4 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
          {interestsList.map((interest, index) => (
            <button
              key={index}
              className={`interest-item w-full py-3 px-6 rounded-full shadow-lg ${
                selectedInterests.includes(interest)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        className="absolute bottom-20 left-5 md:bottom-40 md:left-80 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Previous"
        onClick={onPrev}
      >
        Previous
      </button>

      {/* Submit button */}
      <button
        className={`absolute bottom-20 right-5 md:bottom-40 md:right-80 px-4 py-2 rounded-full shadow-lg transition-colors ${
          selectedInterests.length > 0
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        aria-label="Next"
        onClick={handleSubmit}
        disabled={selectedInterests.length === 0}
      >
        Submit
      </button>
    </div>
  );
};

export default Interests;
