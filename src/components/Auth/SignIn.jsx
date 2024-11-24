import React from "react";
import {
  SignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Navbar from "../Commons/Navbar";

const SignInPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center my-20">
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
