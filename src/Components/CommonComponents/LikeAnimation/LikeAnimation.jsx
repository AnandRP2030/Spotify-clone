import React, { useState } from "react";
import "./LikeAnimation.css";

const TwitterHeart = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="stage">
      <div
        className={`heart ${isActive ? "is-active" : ""}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default TwitterHeart;
