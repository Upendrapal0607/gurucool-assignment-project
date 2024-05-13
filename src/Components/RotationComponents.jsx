import React, { useState } from "react";
import "./style.css";
export const RotationComponents = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  };

  return (

    <div className="button-rotation-main">
      <button
        className={`rotating-button ${isRotating ? "rotate" : ""}`}
        onClick={handleClick}
      >
        Press me
      </button>
    
    </div>
  );
};
