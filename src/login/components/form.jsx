import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    lastName: "",
    contact: "",
  });
  const [otp, setOtp] = useState(false);
  const [formData1, setFormData1] = useState({
    otp: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChange1 = (event) => {
    setFormData1({ ...formData1, [event.target.name]: event.target.value });
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    const registerData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.contact,
    };

    try {
      const response = await fetch("http://localhost:5666/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      setOtp(true);
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const handleUploadOtp = async (event) => {
    event.preventDefault();

    const registerData = {
      email: formData.email,
      otp: formData1.otp,
    };

    try {
      const response = await fetch("http://localhost:5666/auth/verify-otp", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error("OTP failed");
      }

      const data = await response.json();

      document.cookie = `token=${data.token}; path=/`;
      window.location.href = "/resident";

      console.log("OTP applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col md:w-[400px] w-[80%]"
        onSubmit={handleUpload}
      >
        <div className="flex flex-col md:w-[400px]">
          <div className="px-3 mb-10 flex font-Bree text-[#0C9663] font-semibold text-4xl mt-[50px] text-center">
            Who are you ?
          </div>
          <div className="px-3 mb-6 flex flex-col">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-xl font-bold mb-2 font-Bree"
            >
              First Name*
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-md"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="px-3 mb-6 flex flex-col">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-xl font-bold mb-2 font-Bree"
            >
              Last Name*
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-md"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="px-3 mb-6 flex flex-col">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-xl font-bold mb-2 font-Bree"
            >
              Email ID*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-md"
              placeholder="Enter your email id"
              required
            />
          </div>

          <div className="px-3 mb-6 flex flex-col">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-xl font-bold mb-2 font-Bree"
            >
              Contact No.*
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-md"
              placeholder="Enter your contact no."
              required
            />
          </div>

          {otp && (
            <div className="px-3 mb-6 flex flex-col">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-xl font-bold mb-2 font-Bree"
              >
                Enter OTP*
              </label>
              <input
                id="otp"
                type="number"
                name="otp"
                value={formData1.otp}
                onChange={handleChange1}
                className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-md"
                placeholder="Enter OTP"
                required
              />
            </div>
          )}
        </div>
        {!otp && (
          <button
            type="submit"
            className="bg-[#33F28B] font-Bree text-lg hover:bg-green-500 text-[#1D233B] py-3 px-4 m-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 w-[60%]"
          >
            Request OTP
          </button>
        )}
      </form>
      {otp && (
        <button
          onClick={handleUploadOtp}
          className="bg-[#33F28B] font-Bree text-lg hover:bg-green-500 text-[#1D233B] py-3 px-4 m-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 w-[60%]"
        >
          Get Started
        </button>
      )}
    </div>
  );
}

export default ContactForm;
