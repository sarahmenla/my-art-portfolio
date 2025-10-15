import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtworkCard from "./ArtworkCard";

import art1 from "/images/art1.png";
import art2 from "/images/art2.png";
import art3 from "/images/art3.png";
import art4 from "/images/art4.png";
import art5 from "/images/art5.png";
import art6 from "/images/art6.png";
import art7 from "/images/art7.png";
import art8 from "/images/art8.png";
import art9 from "/images/art9.png";
import art10 from "/images/art10.png";

export default function PaintingsPage() {
  const navigate = useNavigate();
  const [paddingTop, setPaddingTop] = useState("340px");

  // ✅ Dynamically adjust padding based on screen width
  useEffect(() => {
    const updatePadding = () => {
      const newPadding = window.innerWidth < 768 ? "300px" : "340px";
      setPaddingTop(newPadding);
    };

    updatePadding(); // Run once on mount
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // 🎨 Artwork groups
  const acrylicPaints = [
    { title: "Morning Glow", type: "Acrylic on Canvas", image: art1, colors: ["#E0ABB0", "#AF4961", "#003704"] },
    { title: "Urban Sunset", type: "Acrylic on Canvas", image: art2, colors: ["#988090", "#22668D", "#8DA274"] },
    { title: "Blush Garden", type: "Acrylic on Canvas", image: art3, colors: ["#D7ADAD", "#BC787E", "#628572"] },
    { title: "Countryside Tree", type: "Acrylic on Paper", image: art4, colors: ["#8FAD85", "#B8C9A7", "#4C5946"] },
    { title: "Autumn River", type: "Acrylic on Paper", image: art5, colors: ["#C28B5B", "#5E4932", "#A8B4C1"] },
    { title: "Yellow Meadow", type: "Acrylic on Paper", image: art6, colors: ["#E5D67B", "#A3B874", "#4C6A33"] },
  ];

  const gouachePaints = [
    { title: "Swan Lake", type: "Gouache on Paper", image: art7, colors: ["#D2E3E9", "#90A8B7", "#3B4F5E"], },
  ];

  const watercolourPaints = [
    { title: "Kiki's Delivery Service Cottage", type: "Watercolour on Paper", image: art8, colors: ["#E7C1B3", "#76947B", "#2F3A2F"], },
    { title: "Lofi Girl", type: "Watercolour on Paper", image: art9, colors: ["#E8C4B2", "#A4785C", "#EAE2D6"], },
    { title: "Reach The Candy", type: "Watercolour on Paper", image: art10, colors: ["#E9D7C3", "#C8A97D", "#7E5F49"], },
  ];

  return (
    <>
      {/* 🔹 Sticky Paint Type Bar */}
      <div
        className="paint-type-bar d-flex justify-content-between align-items-center px-3 shadow-sm"
        style={{
          position: "fixed",
          top: "70px", // right under navbar
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(8px)",
          zIndex: 2000,
          height: "60px",
        }}
      >
        {/* Go Back Button */}
        <button onClick={() => navigate(-1)} className="btn btn-back">
          ← Go Back
        </button>

        {/* Paint Type Buttons */}
        <div className="text-center flex-grow-1">
          <span className="fw-semibold me-2 text-muted">Paint type:</span>
          <button
            className="btn btn-paint mx-2"
            onClick={() =>
              document.getElementById("acrylic").scrollIntoView({ behavior: "smooth" })
            }
          >
            Acrylic
          </button>
          <button
            className="btn btn-paint mx-2"
            onClick={() =>
              document.getElementById("gouache").scrollIntoView({ behavior: "smooth" })
            }
          >
            Gouache
          </button>
          <button
            className="btn btn-paint mx-2"
            onClick={() =>
              document.getElementById("watercolour").scrollIntoView({ behavior: "smooth" })
            }
          >
            Watercolour
          </button>
          <button
            className="btn btn-paint mx-2"
            onClick={() =>
              document.getElementById("oil").scrollIntoView({ behavior: "smooth" })
            }
          >
            Oil
          </button>
        </div>

        {/* Spacer for symmetry */}
        <div style={{ width: "90px" }}></div>
      </div>

      {/* 🔸 Main Page Content */}
      <div
        className="container my-5 paintings-container custom-padding"
        style={{ paddingTop }}
      >
        {/* 🎨 Acrylic Section */}
        <section id="acrylic" className="mb-5">
          <h2 className="text-center mb-4 fw-bold">Acrylic Paintings</h2>
          <div className="row justify-content-center g-4">
            {acrylicPaints.map((art, idx) => (
              <div key={idx} className="col-12 col-md-4 d-flex justify-content-center">
                <ArtworkCard {...art} />
              </div>
            ))}
          </div>
        </section>

        {/* 🎨 Gouache Section */}
        <section id="gouache" className="mb-5">
          <h2 className="text-center mb-4 fw-bold">Gouache Paintings</h2>
          <div className="row justify-content-center g-4">
            {gouachePaints.map((art, idx) => (
              <div key={idx} className="col-12 col-md-4 d-flex justify-content-center">
                <ArtworkCard {...art} />
              </div>
            ))}
          </div>
        </section>

        {/* 🎨 Watercolour Section */}
        <section id="watercolour" className="mb-5">
          <h2 className="text-center mb-4 fw-bold">Watercolour Paintings</h2>
          <div className="row justify-content-center g-4">
            {watercolourPaints.map((art, idx) => (
              <div key={idx} className="col-12 col-md-4 d-flex justify-content-center">
                <ArtworkCard {...art} />
              </div>
            ))}
          </div>
        </section>

        {/* 🎨 Oil Section (Placeholder) */}
        <section id="oil" className="mb-5">
          <h2 className="text-center mb-4 fw-bold">Oil Paintings</h2>
          <p className="text-center text-muted">Coming soon!</p>
        </section>
      </div>
    </>
  );
}
