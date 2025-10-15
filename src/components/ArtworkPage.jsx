import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ArtworkPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const lensRef = useRef(null);

  if (!state) return <p className="text-center mt-5">Artwork not found.</p>;
  const { title, image, type, colors } = state;

  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const zoom = 1.8;
    if (!img || !lens) return;

    lens.style.backgroundImage = `url(${image})`;

    const moveLens = (e) => {
      e.preventDefault();
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const lensHalf = lens.offsetWidth / 2;
      const newX = Math.max(lensHalf, Math.min(x, rect.width - lensHalf));
      const newY = Math.max(lensHalf, Math.min(y, rect.height - lensHalf));
      lens.style.left = `${newX - lensHalf}px`;
      lens.style.top = `${newY - lensHalf}px`;
      lens.style.backgroundPosition = `-${newX * zoom - lensHalf}px -${
        newY * zoom - lensHalf
      }px`;
    };

    const showLens = () => {
      lens.style.display = "block";
      lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
    };
    const hideLens = () => (lens.style.display = "none");

    img.addEventListener("mousemove", moveLens);
    img.addEventListener("mouseenter", showLens);
    img.addEventListener("mouseleave", hideLens);
    lens.addEventListener("mousemove", moveLens);

    return () => {
      img.removeEventListener("mousemove", moveLens);
      img.removeEventListener("mouseenter", showLens);
      img.removeEventListener("mouseleave", hideLens);
      lens.removeEventListener("mousemove", moveLens);
    };
  }, [image]);

  return (
    <div className="artwork-page">
      <div className="container-fluid px-5">
        <div className="artwork-layout">
          {/* Left side — painting and Go Back button */}
          <div className="artwork-left position-relative d-flex align-items-start">
            <div className="artwork-frame position-relative">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-back artwork-back-btn"
              >
                ← Go Back
              </button>
              <img ref={imgRef} src={image} alt={title} className="artwork-full" />
              <div ref={lensRef} className="magnifier-lens"></div>
            </div>
          </div>

          {/* Right side — artwork info */}
          <div className="artwork-info text-start">
            <h2 className="fw-bold">{title}</h2>
            <p className="text-muted fs-5 mb-4">{type}</p>
            <div className="color-palette-vertical">
              {colors?.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch-vertical"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
