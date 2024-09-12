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
import ArticleDetail from "./components/blogSection/ArticleDetail";
import Discover from "./components/discover/Discover";
import Tech from "./components/tech/Tech";
import Festival from "./components/festival/Festival";
import Sports from "./components/sports/Sports";
import Stories from "./components/stories/Stories";
import "./App.css";
import DestinationList from "./components/topdestination/DestinationList";
import PlanYourTrip from "./components/planyourtrip/PlanYourTrip";
import Planning from "./components/planning/Planning";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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

  const shouldShowHeroSection = location.pathname === "/";
  const shouldShowTopDestination = location.pathname === "/";
  const shouldShowPlanYourTrip = location.pathname === "/";
  const shouldShowPlanning = location.pathname === "/planning";

  // Determine if Navbar should be shown
  const shouldShowNavbar = location.pathname !== "/planning";

  return (
    <div className="App">
      {shouldShowNavbar && (
        <Navbar onSectionClick={handleSectionClick} activeSection={activeSection} />
      )}

      {shouldShowHeroSection && <HeroSection />}
      
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
        <Route path="/planning" element={<Planning />} />
      </Routes>

      {shouldShowTopDestination && <DestinationList />}
      {shouldShowPlanYourTrip && <PlanYourTrip />}

      <Footer />
    </div>
  );
}

export default App;