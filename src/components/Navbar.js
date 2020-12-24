import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav className="">
        <div className="nav-container section">
          <Link to="/" className="logo">
            LOGO
          </Link>

          <ul className="nav-items">
            <Link to="/" activeClass="active">
              <li>Home</li>
            </Link>

            <Link to="/about" activeClassName="active">
              <li>About</li>
            </Link>

            <Link to="/contact" activeClass="active">
              <li>Contact</li>
            </Link>
          </ul>

          <div className="nav-toggle">
            <button
              className="logo nav-btn "
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              {showLinks ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`  ${
          showLinks ? "toggle-menu" : " toggle-menu hide-display"
        }  `}
      >
        <ul>
          <Link to="/" onClick={() => setShowLinks(false)}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={() => setShowLinks(false)}>
            <li>About</li>
          </Link>
          <Link to="/contact" onClick={() => setShowLinks(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
