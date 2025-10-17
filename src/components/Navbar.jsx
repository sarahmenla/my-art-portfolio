import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Left links */}
        <div className="d-flex gap-3 ms-3">
          <Link to="/" className="nav-link fw-semibold">
            About Me
          </Link>
          <Link to="/" className="nav-link fw-semibold">
            Paintings
          </Link>
          <Link to="/" className="nav-link fw-semibold">
            Digital Illustrations
          </Link>
        </div>

        {/* Center title */}
        <div className="position-absolute start-50 translate-middle-x">
          <h5 className="m-0 fw-bold text-dark text-center">
            🌸 Sarah Menla 🌸
          </h5>
        </div>

        {/* Right icons */}
        <div className="d-flex gap-3 me-3">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="bi bi-youtube"></i> YouTube
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
