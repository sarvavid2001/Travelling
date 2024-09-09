import React from "react";
import ArticleBanner from "./ArticleBanner"; // Import ArticleBanner component
import themeImage from "/home/rabinam/Desktop/Travelling/frontend/src/assets/theme.png"; // Import theme image used for all articles
import temple from "/home/rabinam/Desktop/Travelling/frontend/src/assets/temple.jpg";
import culture from "/home/rabinam/Desktop/Travelling/frontend/src/assets/villageimage.jpeg";
import nature from "/home/rabinam/Desktop/Travelling/frontend/src/assets/mountains.jpeg";

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      image: temple,
      title: "New Paths to Discover",
      description:
        "Discover the ancient temples and explore hidden paths in nature.",
      overlayText: "Adventure awaits",
      link: "/article/1",
      themeImage: themeImage, // Pass the same theme image for article 1
    },
    {
      id: 2,
      image: culture,
      title: "Cultural Discoveries",
      description:
        "Experience the cultural richness of remote villages and traditions.",
      overlayText: "Culture and History",
      link: "/article/2",
      themeImage: themeImage, // Pass the same theme image for article 2
    },
    {
      id: 3,
      image: nature,
      title: "Embrace Nature's Beauty",
      description:
        "Connect with nature and witness the beauty of majestic mountains.",
      overlayText: "Nature's Beauty",
      link: "/article/3",
      themeImage: themeImage, // Pass the same theme image for article 3
    },
  ];

  return (
    <div>
      <div
        className="text-4xl mb-5"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        Stories
      </div>

      {articles.map((article) => (
        <div key={article.id} className="mb-0">
          {" "}
          {/* Add bottom margin */}
          <ArticleBanner
            id={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
            link={article.link}
            overlayText={article.overlayText}
            themeImage={article.themeImage}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
