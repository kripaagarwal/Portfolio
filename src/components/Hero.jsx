import React from "react";
import profile from "../data/profile.json";

export function Hero() {
  const { name, role, location, email, phone, portfolioUrl, resumeUrl } =
    profile;

  return (
    <header>
      <div className="container">
        <div className="hero">
          <span className="hero-badge">Portfolio</span>
          <h1>{name}</h1>
          <p className="tagline">{role}</p>
          <div className="hero-contact">
            <span>{location}</span>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Portfolio
            </a>
            <a
              className="btn btn-outline"
              href={resumeUrl}
              download={`${name.replace(" ", "-")}-Resume.pdf`}
            >
              Download Resume
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

