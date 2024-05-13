import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const FadeAnimationComponents = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleLinkClick = (path) => {
    setIsVisible(false);
    setTimeout(() => {
      window.location.href = path;
    }, 1000);
  };

  return (
    <div className={`fade-in-main fade-in ${isVisible ? "visible" : ""}`}>
      <h1>Fade Animation Components</h1>
      <h4>Press below to see fade-in animation </h4>
      <div>
        <Link
          className="animation-link"
          onClick={() => handleLinkClick("/carousal")}
        >
          CAROUSEL
        </Link>
        <Link
          className="animation-link"
          onClick={() => handleLinkClick("/rotate")}
        >
          ROTATION
        </Link>
      </div>
    </div>
  );
};
