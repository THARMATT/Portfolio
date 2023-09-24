import Button from "@/components/Button";
import React from "react";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Hi My Name is</h1>
      <h2 className="hero-title-large">Nigam Sharma.</h2>
      <h3 className="hero-title-large hero-title-sub">
        I craft things for web.
      </h3>
      <p className="hero-text">
        I&apos;m a Software Engineer who has keen interest in web development.
        <br /> I
        Love to design and develop webites.
      </p>
      <div className="hero-button">
        <Button text="What I Love" link="" />
      </div>
    </div>
  );
}

export default Hero;
