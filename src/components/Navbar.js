import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SegmentIcon from "@mui/icons-material/Segment";
import "../assets/styles/App.scss";
import Logo from "../assets/images/askGhanaa-logo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img id="logo_Main" src={Logo} alt="Logo for Askghanaa" />
      </div>
      <nav>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/" style={{ color: "#222831", textDecoration: "none" }}>
                Home
              </Link>
            </li>



            <li style={{ position: "relative" }} onMouseLeave={() => setIsOpen(false)}>
      <p onClick={toggleDropdown}>
        About
      </p>
      {isOpen && (
        <ul ref={dropdownRef} style={{ position: "absolute", top: "100%", left: 0, backgroundColor: "#fff", padding: "10px", display:"flex", flexFlow:"column", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", width: "max-content" }}>
          <li>
            <Link to="/About" style={{ color: "#222831", textDecoration: "none" }}>
             Who We Are
            </Link>
          </li>
          <li>
            <Link to="/Partners" style={{ color: "#222831", textDecoration: "none" }}>
              Our Partners
            </Link>
          </li>
          <li>
            <Link to="/our-team" style={{ color: "#222831", textDecoration: "none" }}>
              Our Team
            </Link>
          </li>
        </ul>
      )}
    </li>

            <li>
              <Link to="/What-We-Do" style={{ color: "#222831", textDecoration: "none" }}>
                What We Do
              </Link>
            </li>
            
            <li>
              <Link to="/" style={{ color: "#222831", textDecoration: "none" }}>
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/Gallery" style={{ color: "#222831", textDecoration: "none" }}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#222831", textDecoration: "none" }}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "#222831", textDecoration: "none" }}>
                Contact
              </Link>
            </li>

            <button className="navbrandBtn">
              <Link
                to="/Donation"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                DONATE NOW
              </Link>
            </button>
          </ul>
        </div>
      </nav>

      <button className="brandBtn">
        <Link to="/Donation" style={{ color: "#fff", textDecoration: "none" }}>
          DONATE NOW
        </Link>
      </button>

      <div id="menu-icon" onClick={handleShowNavbar}>
        <SegmentIcon />
      </div>
    </header>
  );
}

export default Navbar;
