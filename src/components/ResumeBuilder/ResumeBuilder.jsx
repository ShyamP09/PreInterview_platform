import React from "react";
import Navbar from "../Commons/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "sonner";

export default function ResumeBuilder() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
}
