import React, { useEffect, useState } from "react";
import profile from "../data/profile.json";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstName = profile.name.split(" ")[0] || profile.name;
  const lastName = profile.name.split(" ").slice(1).join(" ");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`nav-wrap${isScrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            {firstName} {lastName && <span>{lastName}</span>}
          </a>
          <span className="nav-sep" aria-hidden="true" />
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
            <a href="#expertise" onClick={handleLinkClick}>
              Expertise
            </a>
            <a href="#experience" onClick={handleLinkClick}>
              Experience
            </a>
            <a href="#education" onClick={handleLinkClick}>
              Education
            </a>
            <a href="#certifications" onClick={handleLinkClick}>
              Certifications
            </a>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

