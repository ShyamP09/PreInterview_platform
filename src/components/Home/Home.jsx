import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Commons/Navbar";
import "./Home.css"; // Import custom CSS

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const coreRef = useRef(null);
  const resumeRef = useRef(null);
  const practiceRef = useRef(null);

  useEffect(() => {
    const sections = [coreRef.current, resumeRef.current, practiceRef.current];

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, x: index % 2 === 0 ? -200 : 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <header className="header">
        <h1 className="header-title">Prepare for Your Placement</h1>
        <p className="header-subtitle">Choose your path to success</p>
      </header>
      <div className="options-container">
        <div ref={coreRef} className="option-card core-subjects">
          <h2>Core Subjects</h2>
          <p>Master the fundamentals with targeted study materials.</p>
        </div>
        <div ref={resumeRef} className="option-card resume-builder">
          <h2>Resume Builder</h2>
          <p>Craft the perfect resume to showcase your skills.</p>
        </div>
        <div ref={practiceRef} className="option-card practice">
          <h2>Practice</h2>
          <p>Sharpen your skills with mock interviews and tests.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
