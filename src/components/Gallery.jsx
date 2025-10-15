import React from "react";
import ArtworkCard from "./ArtworkCard";
import art1 from "/images/art1.png";
import art2 from "/images/art2.png";
import art3 from "/images/art3.png";

export default function Gallery() {
  const artworks = [
    {
      title: "Morning Glow",
      type: "Acrylic on Canvas",
      image: art1,
      colors: ["#E0ABB0", "#AF4961", "#003704"],
    },
    {
      title: "Urban Sunset",
      type: "Acrylic on Canvas",
      image: art2,
      colors: ["#988090", "#22668D", "#8DA274"],
    },
    {
      title: "Blush Garden",
      type: "Acrylic on Canvas",
      image: art3,
      colors: ["#D7ADAD", "#BC787E", "#628572"],
    },
  ];

  return (
    <section id="featured" className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Featured Artwork</h2>

      {/* 3 cards side-by-side on medium+ screens */}
      <div className="row justify-content-center g-4">
        {artworks.map((art, idx) => (
          <div key={idx} className="col-12 col-md-4 d-flex justify-content-center">
            <ArtworkCard {...art} />
          </div>
        ))}
      </div>
    </section>
  );
}
