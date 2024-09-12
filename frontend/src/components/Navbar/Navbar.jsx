import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; 
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";

function Navbar({ onSectionClick, activeSection }) {
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
          <Link to="/" aria-label="Home">
            <h1>Sarvavid</h1>
          </Link>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li className={activeSection === "places-to-visit" ? "active" : ""}>
            <Link to="/discover" onClick={() => handleLinkClick("places-to-visit")}>
              Places to Visit
            </Link>
          </li>
          <li className={activeSection === "inspirational" ? "active" : ""}>
            <Link to="/inspirational" onClick={() => handleLinkClick("inspirational")}>Inspirational</Link>
          </li>
          <li className={activeSection === "festival-events" ? "active" : ""}>
            <Link to="/festival-events" onClick={() => handleLinkClick("festival-events")}>Festival and Events</Link>
          </li>
          <li className={activeSection === "chill" ? "active" : ""}>
            <Link to="/chill" onClick={() => handleLinkClick("chill")}>Chill</Link>
          </li>
          <li className={activeSection === "plan-your-trip" ? "active" : ""}>
            <Link to="/planning" onClick={() => handleLinkClick("plan-your-trip")}>Plan Your Trip</Link>
          </li>
          {isMenuOpen && (
            <li className="close-icon" onClick={toggleMenu}>
              <FaTimes /> 
            </li>
          )}
        </ul>
        <div className="search-icon">
          <FaSearch size={20} />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <span>&#9776;</span>} 
        </button>
      </div>
    </nav>
  );
}

export default Navbar;