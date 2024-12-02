import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHistory,
  FaUserAlt,
  FaClipboardCheck,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <style>
        {`
          /* Navbar Styles */
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1a1a2e; /* Deep dark blue */
            padding: 15px 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .nav-links {
            display: flex;
            justify-content: flex-start;
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          .nav-link {
            display: flex;
            align-items: center;
            color: #eaeaea; /* Light gray text */
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            margin-left: 40px;
            position: relative;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .nav-link:hover {
            color: #f72585; /* Neon pink */
            transform: scale(1.1);
          }

          .nav-icon {
            margin-right: 10px;
            font-size: 22px;
          }

          .nav-link:after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: #f72585; /* Neon pink underline */
            position: absolute;
            bottom: -5px;
            left: 0;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-in-out;
          }

          .nav-link:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          /* Hamburger Icon - Mobile View */
          .hamburger-icon {
            display: none;
            font-size: 30px;
            color: #eaeaea;
            cursor: pointer;
          }

          /* Mobile Navbar Styles */
          .mobile-navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(145deg, #1a1a2e, #16213e); /* Gradient */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 999;
          }

          .mobile-navbar.open {
            transform: translateY(0);
          }

          .mobile-nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .mobile-nav-link {
            color: #eaeaea;
            font-size: 22px;
            margin: 15px 0;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease-in-out, transform 0.3s ease;
          }

          .mobile-nav-link:hover {
            color: #4cc9f0; /* Neon blue */
            transform: scale(1.1);
          }

          .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            color: #eaeaea;
            cursor: pointer;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .navbar .nav-links {
              display: none;
            }

            .hamburger-icon {
              display: block;
            }
          }
        `}
      </style>

      <nav className="navbar">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Navbar */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              <FaClipboardCheck className="nav-icon" />
              Register
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">
              <FaUserAlt className="nav-icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/history" className="nav-link">
              <FaHistory className="nav-icon" />
              History
            </Link>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <div className={`mobile-navbar ${isMenuOpen ? "open" : ""}`}>
          <div className="close-button" onClick={toggleMenu}>
            <FaTimes />
          </div>
          <ul className="mobile-nav-links">
            <li>
              <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="mobile-nav-link" onClick={toggleMenu}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="mobile-nav-link" onClick={toggleMenu}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/history" className="mobile-nav-link" onClick={toggleMenu}>
                History
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
