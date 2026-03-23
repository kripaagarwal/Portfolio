import React from "react";
import profile from "../data/profile.json";

export function Education() {
  const items = profile.education;

  return (
    <section id="education">
      <div className="container">
        <span className="section-label reveal">Education</span>
        <h2 className="reveal reveal-delay-1">Education</h2>
        {items.map((edu, index) => (
          <div
            key={edu.title + index}
            className={`edu-item reveal reveal-delay-${index + 2}`}
          >
            <strong>{edu.title}</strong>
            <span>
              {edu.institution} · {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

