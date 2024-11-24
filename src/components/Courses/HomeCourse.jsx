import React from "react";
import Navbar from "../Commons/Navbar";

const HomeCourse = () => {
  const subjects = [
    {
      name: "DBMS",
      playlist: "https://www.youtube.com/embed/eYpXCdvKwEQ?si=7x1md4RJSxdMlUqn",
    },
    {
      name: "DSA",
      playlist:
        "https://www.youtube.com/embed/videoseries?si=v7hHS9cwwpcypzny&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    },
    {
      name: "OOP",
      playlist: "https://www.youtube.com/embed/mlIUKyZIUUU?si=WRbwUxm14yTeivqO",
    },
    {
      name: "Computer Networks",
      playlist:
        "https://www.youtube.com/embed/videoseries?si=ztSFB35Po9PhpKf2&amp;list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-10">
        <h1 className="text-5xl font-extrabold text-white text-center mb-10">
          Learning Hub
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {subject.name}
              </h2>
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={subject.playlist}
                  title={subject.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <button className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transition-all duration-300">
                Take {subject.name} Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCourse;
