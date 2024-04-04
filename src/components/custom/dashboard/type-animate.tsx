"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypingAnimation = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Priyansh Sahu",
          1000,
          "Web Developer",
          1000,
          "Software Engineer",
          1000,
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingAnimation;
