// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeCourse from "./components/Courses/HomeCourse";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<HomeCourse />} />
        <Route path="/resume" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
