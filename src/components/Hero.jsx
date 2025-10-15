import React from "react";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Welcome to My Art World</h1>
          <p>
            Explore my paintings, digital illustrations, and creative designs —
            each piece a glimpse into color and emotion.
          </p>
          <a href="#featured" className="btn btn-light mt-3">
            Explore My Work
          </a>

        </div>
      </div>
    </section>
  );
}
