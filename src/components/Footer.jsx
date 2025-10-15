import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-light mt-5 border-top">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Sarah Menla. All Rights Reserved.
      </p>
    </footer>
  );
}
