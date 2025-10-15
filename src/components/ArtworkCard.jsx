import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArtworkCard({ title, type, image, colors }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`art-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() =>
        navigate(`/art/${encodeURIComponent(title)}`, {
          state: { title, type, image, colors },
        })
      }
    >
      <div className="art-image-wrapper">
        <img src={image} alt={title} className="art-image" />
      </div>
      <div className="art-info-top">
        <h5 className="fw-bold mb-1">{title}</h5>
        <p className="text-muted mb-0">{type}</p>
      </div>
    </div>
  );
}
