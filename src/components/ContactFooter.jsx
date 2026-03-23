import React from "react";
import profile from "../data/profile.json";

export function ContactFooter() {
  const { name, location, email, phone, portfolioUrl, resumeUrl, footerTagline } =
    profile;

  return (
    <footer id="contact">
      <div className="container">
        <span className="section-label reveal">Get in touch</span>
        <h2 className="reveal reveal-delay-1">Contact</h2>
        <div className="hero-contact reveal reveal-delay-2">
          <span>{location}</span>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className="footer-cta reveal reveal-delay-2">
          <a
            className="btn btn-outline"
            href={resumeUrl}
            download={`${name.replace(" ", "-")}-Resume.pdf`}
          >
            Download Resume
          </a>
        </div>
        <p className="reveal reveal-delay-3">{footerTagline}</p>
      </div>
    </footer>
  );
}

