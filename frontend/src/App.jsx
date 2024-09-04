import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import BlogList from './components/blogSection/BlogList';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import BlogAdmin from './components/blogSection/BlogAdmin';
import BlogDetails from './components/blogSection/BlogDetails';
import Services from './components/services/Services';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Navbar onSectionClick={handleSectionClick} />
      <HeroSection />

      <div className="container">
        <Routes>
          <Route path="/admin" element={<BlogAdmin />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/" element={<Services />} />
        </Routes>

        {activeSection === "story" && <StorySection />}
        {activeSection === "footer" && <Footer />}
      </div>
    </div>
  );
}

export default App;
