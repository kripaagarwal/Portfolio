import React, { useEffect } from "react";
import "./styles.css";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { ContactFooter } from "./components/ContactFooter";

export function App() {
  useEffect(() => {
    // Scroll reveal (IntersectionObserver)
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Background />
      <div className="page-content">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Certifications />
        <ContactFooter />
      </div>
    </>
  );
}

