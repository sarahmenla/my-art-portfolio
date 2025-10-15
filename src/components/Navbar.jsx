import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Menu */}
        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link fw-semibold" to="/">Home</Link>
          <Link className="nav-link fw-semibold" to="/paintings">Paintings</Link>
          <Link className="nav-link fw-semibold" to="/digital">Digital Illustrations</Link>
        </div>

        {/* Center Logo */}
        <h4 className="fw-bold text-center m-0">Sarah Menla</h4>

        {/* Right Links */}
        <div className="d-flex align-items-center gap-3">
          <a
            href="https://www.youtube.com/@sarahxart9911"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark text-decoration-none"
          >
            <i className="bi bi-youtube me-1"></i> YouTube
          </a>
          <a
            href="https://www.instagram.com/sarah.xart/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark text-decoration-none"
          >
            <i className="bi bi-instagram me-1"></i> Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
