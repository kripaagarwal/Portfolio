import React from "react";
import profile from "../data/profile.json";

export function Experience() {
  const items = profile.experience;

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label reveal">Experience</span>
        <h2 className="reveal reveal-delay-1">Professional experience</h2>
        <div className="timeline">
          {items.map((job, index) => (
            <article key={job.company + index} className="timeline-item reveal">
              <h3>{job.company}</h3>
              <div className="timeline-meta">
                {job.period}
                {job.location ? (
                  <>
                    {" "}
                    · <span className="location">{job.location}</span>
                  </>
                ) : null}
              </div>
              <ul>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

