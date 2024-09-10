import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the article ID
import temple from "/src/assets/temple.jpg";
import culture from "/src/assets/villageimage.jpeg";
import nature from "/src/assets/mountains.jpeg";
import themeImage from "/src/assets/theme.png"; 

const articles = [
  {
    id: 1,
    image: temple,
    title: "New Paths to Discover",
    description: "Detailed description of the article...",
  },
  {
    id: 2,
    image: culture,
    title: "Discover Ancient Traditions",
    description: "Detailed description of the article...",
  },
  {
    id: 3,
    image: nature,
    title: "Embrace Nature's Beauty",
    description: "Detailed description of the article...",
  },
];

const ArticleDetail = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const articleId = id ? parseInt(id, 10) : NaN;

  console.log("Article ID from URL:", id); // Log the raw ID from URL
  console.log("Parsed Article ID:", articleId); // Log the parsed ID

  const article = articles.find((article) => article.id === articleId); // Find the article by ID

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div
      className="container mx-auto py-40 px-15"
      style={{
        backgroundImage: `url(${themeImage})`, // Use the imported theme image as the background
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 relative bg-green-700 p-4 rounded-lg">
          <img
            src={article.image} // This should be the imported image
            alt={article.title}
            className="w-full h-[300px] lg:h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center p-4 rounded-lg bg-opacity-80">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{article.title}</h2>
          <p className="text-base lg:text-lg text-gray-700 mb-4">{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
