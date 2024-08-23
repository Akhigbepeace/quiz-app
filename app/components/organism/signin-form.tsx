"use client";

import Image from "next/image";
import React, { SyntheticEvent, useState } from "react";
import Typography from "../atom/typography";
import FormItem from "./formitem";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const checkmark = "/assets/check.png";
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAccountCreation = (e: SyntheticEvent) => {
    e.preventDefault();

    Cookies.set("user", JSON.stringify(formValues), { expires: 1 });

    setFormValues({
      fullName: "",
      email: "",
      password: "",
    });

    router.push("/quiz");

    alert("User signed in successfully");
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-5 px-6 lg:px-12">
      <Image src={checkmark} alt="showcase" width={26} height={32} />

      <Typography variant="h3" weight="extraBold" color="secondaryColor">
        Sign in to Quiz App
      </Typography>

      <div className="mt-4">
        <Typography variant="p" weight="light" color="tertiary">
          Kindly fill in the following details to get started
        </Typography>
      </div>

      <form
        className="flex flex-col gap-6 w-full max-w-[360px] mt-8 "
        onSubmit={handleAccountCreation}
      >
        <FormItem
          placeholder="Enter your full name"
          position="col"
          label="Full Name"
          name="fullName"
          type="text"
          value={formValues.fullName}
          onChange={handleOnChange}
        />
        <FormItem
          placeholder="Enter your email"
          position="col"
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleOnChange}
        />
        <FormItem
          placeholder="Enter your password"
          position="col"
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleOnChange}
        />

        <button
          type="submit"
          className="w-full bg-primaryColor text-white rounded-lg border py-3 text-center h-11"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
