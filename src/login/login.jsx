import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import ContactForm from "./components/form";

function LoginPage() {
  useEffect(() => {
    // Get the value of the 'token' cookie
    const authToken = document.cookie
      // Split the document.cookie string into individual cookies
      .split("; ")
      // Find the cookie that starts with 'token='
      .find((row) => row.startsWith("token="))
      // If the cookie is found, split it by '=' and get the second part (the token value)
      ?.split("=")[1];

    // Check if authToken is defined and not null (which means the 'token' cookie exists)
    if (authToken) {
      console.log("Token exists:", authToken);
      window.location.href = "/resident";
      // Perform actions with the token if needed
    }
  }, []); // This effect runs once on component mount

  return (
    <>
      <div className="flex w-screen justify-center items-center">
        <NavLink to="/pricedata">
          <img
            src="img/back_plain.png"
            alt="back"
            className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
          />
        </NavLink>

        <img
          src="img/login.png"
          alt="login image"
          className="w-[60%] md:block hidden"
        />
        <div className="w-screen flex flex-col md:items-center md:justify-center md:mt-[100px] z-10">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
