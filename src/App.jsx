import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ArtworkPage from "./components/ArtworkPage";
import PaintingsPage from "./components/PaintingsPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* 👈 this ensures every page starts at the top */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Gallery />
            </>
          }
        />
        <Route path="/art/:title" element={<ArtworkPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
      </Routes>
    </>
  );
}


