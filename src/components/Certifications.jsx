import React from "react";
import profile from "../data/profile.json";

export function Certifications() {
  const items = profile.certifications;

  return (
    <section id="certifications">
      <div className="container">
        <span className="section-label reveal">Credentials</span>
        <h2>Certifications</h2>
        <ul className="cert-list">
          {items.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

