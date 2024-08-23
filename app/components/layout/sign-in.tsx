import React from "react";
import SigninForm from "../organism/signin-form";
import FingerprintShowcase from "../organism/fingerprint-showcase";

const SignIn = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <FingerprintShowcase />
      <SigninForm />
    </div>
  );
};

export default SignIn;
