import React, { useState } from "react";
import { API } from "../../utils/constants";

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

  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const handleChange2 = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChange1 = (event) => {
    setFormData1({ ...formData1, [event.target.name]: event.target.value });
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (
      formData.firstName == "" ||
      formData.lastName == "" ||
      formData.email == "" ||
      formData.contact == ""
    ) {
      return;
    }

    const registerData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: selectedCountryCode.toString() + formData.contact.toString(),
    };

    try {
      const response = await fetch(`${API}auth/register`, {
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
      const response = await fetch(`${API}auth/verify-otp`, {
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

      console.log(data);

      document.cookie = `token=${data.token}; path=/; expires=3600000;`;
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

            <div className="flex">
              <select
                id="countryCode"
                value={selectedCountryCode}
                onChange={handleChange2}
                className="w-[70px] mr-2"
              >
                <option value="">+00</option>
                <option value="+1">USA (+1)</option>
                <option value="+1">Canada (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+91">India (+91)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+86">China (+86)</option>
                <option value="+81">Japan (+81)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+33">France (+33)</option>
                <option value="+34">Spain (+34)</option>
                <option value="+39">Italy (+39)</option>
                <option value="+7">Russia (+7)</option>
                <option value="+82">South Korea (+82)</option>
                <option value="+64">New Zealand (+64)</option>
                <option value="+65">Singapore (+65)</option>
                <option value="+60">Malaysia (+60)</option>
                <option value="+971">United Arab Emirates (+971)</option>
                <option value="+55">Brazil (+55)</option>
                <option value="+92">Pakistan (+92)</option>
              </select>
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
