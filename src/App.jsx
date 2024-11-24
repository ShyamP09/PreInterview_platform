// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import HomeCourse from "./components/Courses/HomeCourse";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/dashboard";
import SignInPage from "./components/Auth/SignIn";
import EditResume from "./components/dashboard/resume/[resumeId]/edit";
import GroupDiscussion from "./components/Commons/GroupDiscussion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/resume",
    element: <ResumeBuilder />,
    children: [
      {
        path: "/resume/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/resume/dashboard/resume/:resumeId/edit",
        element: <EditResume />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/courses",
    element: <HomeCourse />,
  },
  {
    path: "/groupdiscussion",
    element: <GroupDiscussion />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
