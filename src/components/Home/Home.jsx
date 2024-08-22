import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Commons/Navbar";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const comp = useRef(null);
  const coreRef = useRef(null);
  const resumeRef = useRef(null);
  const practiceRef = useRef(null);

  // Intro slider animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1 className="text-9xl" id="title-1">
            PREPARE
          </h1>
          <h1 className="text-9xl" id="title-2">
            INTERNSHIP
          </h1>
          <h1 className="text-9xl" id="title-3">
            AND PLACEMENT
          </h1>
        </div>
        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <header className="header">
            <h1 className="header-title">Prepare for Your Placement</h1>
            <p className="header-subtitle">Choose your path to success</p>
          </header>
          <div className="options-container">
            <div
              ref={coreRef}
              className="option-card core-subjects hover:cursor-pointer"
            >
              <Link to={"/courses"}>
                <h2>Courses</h2>
                <p>Master the fundamentals with targeted study materials.</p>
              </Link>
            </div>
            <div
              ref={resumeRef}
              className="option-card resume-builder hover:cursor-pointer"
            >
              <Link to={"/resume"}>
                <h2>Resume Builder</h2>
                <p>Craft the perfect resume to showcase your skills.</p>
              </Link>
            </div>
            <div
              ref={practiceRef}
              className="option-card practice hover:cursor-pointer"
            >
              <h2>Practice</h2>
              <p>Sharpen your skills with mock interviews and tests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
