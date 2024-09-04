import React from "react";
import "./Navbar.css";
import { FaSearch, FaTimes } from "react-icons/fa"; // Import the search and close icons

function Navbar({ onSectionClick }) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    onSectionClick(section);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <a href="/" aria-label="Home">
            <h1>Sarvavid</h1>
          </a>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#places-to-visit" onClick={() => handleLinkClick("places-to-visit")}>Places to Visit</a>
          </li>
          <li>
            <a href="#things-to-do" onClick={() => handleLinkClick("things-to-do")}>Things to Do</a>
          </li>
          <li>
            <a href="#festival-events" onClick={() => handleLinkClick("festival-events")}>Festival and Events</a>
          </li>
          <li>
            <a href="#plan-your-trip" onClick={() => handleLinkClick("plan-your-trip")}>Plan Your Trip</a>
          </li>
          <li>
            <a href="#stories-about-places" onClick={() => handleLinkClick("stories-about-places")}>Stories</a>
          </li>
          {isMenuOpen && (
            <li className="close-icon" onClick={toggleMenu}>
              <FaTimes /> 
            </li>
          )}
        </ul>
        <div className="search-icon">
          <FaSearch size={20} /> {/* Search icon */}
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <span>&#9776;</span>} {/* Menu toggle icon */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
