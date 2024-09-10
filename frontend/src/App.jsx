import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import BlogList from "./components/blogSection/BlogList";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import BlogAdmin from "./components/blogSection/BlogAdmin";
import BlogDetails from "./components/blogSection/BlogDetails";
import ArticleList from "./components/blogSection/ArticleList";
import ArticleDetail from "./components/blogSection/ArticleDetail"; // Ensure this path is correct
import Discover from "./components/discover/Discover";
import Tech from "./components/tech/Tech";
import Festival from "./components/festival/Festival";
import Sports from "./components/sports/Sports";
import Stories from "./components/stories/Stories";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation(); // Use useLocation to get the current route

  // Update the activeSection based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("article")) {
      setActiveSection("article");
    } else if (path.includes("admin")) {
      setActiveSection("admin");
    } else if (path.includes("blogs")) {
      setActiveSection("blogs");
    } else if (path === "/") {
      setActiveSection("home");
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Determine if the HeroSection should be shown based on the current route
  const shouldShowHeroSection = location.pathname === "/";

  return (
    <div className="App">
      <Navbar onSectionClick={handleSectionClick} activeSection={activeSection} />

      {/* Conditionally render HeroSection only when on the home page */}
      {shouldShowHeroSection && <HeroSection />}

      <div className="container">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/discover" element={<ArticleList />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/festival-events" element={<Festival />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/stories" element={<Stories />} />
          
          <Route path="/admin" element={<BlogAdmin />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>

        {/* Conditionally render StorySection and Footer based on activeSection */}
        {activeSection === "story" && <StorySection />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
