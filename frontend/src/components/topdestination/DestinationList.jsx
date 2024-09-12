import React from "react";
import TopDestination from "./TopDestination";
import themeImage from "/src/assets/theme.png"; // Import theme image used for all articles
import kunda from "/src/assets/kunda.jpeg";
import culture from "/src/assets/villageimage.jpeg";
import nature from "/src/assets/mountains.jpeg";

const DestinationList = () => {
  const articles = [
    {
      id: 1,
      image: kunda,
      title: "New Paths to Discover",
      overlayText: "Adventure awaits",
      link: "/article/1",
      themeImage: themeImage, // Pass the same theme image for article 1
    },
    {
      id: 2,
      image: culture,
      title: "Cultural Discoveries",
      link: "/article/2",
      themeImage: themeImage, // Pass the same theme image for article 2
    },
    {
      id: 3,
      image: nature,
      title: "Embrace Nature's Beauty",
      overlayText: "Nature's Beauty",
      link: "/article/3",
      themeImage: themeImage, // Pass the same theme image for article 3
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <div
        className="text-4xl mb-5 ml-40"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        Stories
      </div>
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        {articles.map((article) => (
          <div key={article.id} className="mb-0 flex-grow">
            <TopDestination {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
