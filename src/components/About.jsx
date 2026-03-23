import React from "react";
import profile from "../../src/data/profile.json";

export function About() {
  const { heading, text } = profile.about;

  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label reveal">About</span>
        <h2 className="reveal reveal-delay-1">{heading}</h2>
        <p className="reveal reveal-delay-2">{text}</p>
      </div>
    </section>
  );
}

