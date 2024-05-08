import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/footer.scss";
import Logo from "../assets/images/askGhanaa-logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="Wrapper">
        <div className="FooterAbout">
            <h3>About</h3>
          <h4>
            At ASK Ghana we are committed to empowering marginalized communities and people through capacity building, advocacy, and support.
            </h4>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="Pages">
        <h3>Links</h3>
          <ul>
            <li>
              <Link to="/" style={{ color: "color:hsl(235 12% 21% / 1);", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" style={{ color: "color:hsl(235 12% 21% / 1);", textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/What-We-Do" style={{ color: "color:hsl(235 12% 21% / 1);", textDecoration: "none" }}>
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/Gallery" style={{ color: "#000", textDecoration: "none" }}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "#000", textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div id="Contact">
        {/*<h2>Subscribe to our Social Media</h2>*/}
        <h2>Come Visit Us</h2>
          <h3>
            <b>Location:</b> HQ - AGONA SWEDRU, GHANA
          </h3>
          <h3>
            <b>Email:</b>{" "}
            <a href="mailto:askghana6@gmail.com">askghana6@gmail.com</a>
          </h3>
          <h3>
            <b>Phone:</b> <a href="tel:0541292508">0541292508</a>
          </h3>
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
