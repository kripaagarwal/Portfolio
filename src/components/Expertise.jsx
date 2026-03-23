import React from "react";
import profile from "../data/profile.json";

export function Expertise() {
  const items = profile.expertise;

  return (
    <section id="expertise">
      <div className="container">
        <span className="section-label reveal">Expertise</span>
        <h2 className="reveal reveal-delay-1">Areas of expertise</h2>
        <div className="expertise-grid">
          {items.map((item, index) => (
            <span
              key={item}
              className={`reveal reveal-delay-${(index % 6) + 1}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

