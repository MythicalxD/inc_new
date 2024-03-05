import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";

function UserPage2() {
  const [s, sset] = useState("1");

  const handleClick = async () => {
    const selectedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const updatedProducts = [
      ...selectedProducts,
      { productId: "3", quantity: 1 },
    ];
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    sset("1");
    await handleCart();
  };

  const handleClick1 = async () => {
    const selectedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const updatedProducts = [
      ...selectedProducts,
      { productId: "4", quantity: 1 },
    ];
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    sset("2");
    await handleCart();
  };

  const handleCart = async (event) => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];

      // Construct the items array based on selectedProducts
      const items = selectedProducts.map(({ productId, quantity }) => ({
        productId,
        quantity: parseInt(quantity) || 1, // Set quantity to 1 if not provided
      }));

      const registerData = { items }; // Create the payload

      const response = await fetch(`${API}cart/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error("cart failed");
      }

      const data = await response.json();
      localStorage.setItem("total_ca", data.total);

      if (s === "1") {
        window.location.href = "/residentPage";
      } else if (s === "2") {
        window.location.href = "/nonresidentPage";
      }

      console.log("cart applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

  // upload the previous value

  return (
    <>
      <NavLink to="/pricedata">
        <img
          src="img/back.png"
          alt="back"
          className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
        />
      </NavLink>
      <div className="bg-[#F6FAFD] h-screen flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Let’s Get Your Business Started
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Welcome, get your business going in just a few clicks. We recommend
          the right products and services to help set you up for success.
        </div>
        <div className="flex md:flex-row flex-col md:w-[60%] gap-y-4 md:justify-evenly justify-center md:items-start items-center mt-16">
          <NavLink
            className="flex justify-center items-center"
            onClick={handleClick}
          >
            <div className="flex flex-col bg-white rounded-xl md:w-[370px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#ffffff] border-3 cursor-pointer">
              <div className="flex justify-center items-center mt-4">
                <p className="flex font-Bree text-[#0C9663] text-3xl">
                  Resident
                </p>
                <img
                  src="img/stars.png"
                  alt="back"
                  width={15}
                  className="w-[15px] h-[15px] ml-2"
                />
              </div>

              <div className="flex justify-center items-baseline mt-4">
                <p className="text-black font-Bree text-5xl">$499</p>
                <p className="text-black font-Bree text-xl ml-2">CAD</p>
              </div>

              <div className="flex font-Bree text-[#1D233B] font-thin text-sm mt-[15px] w-[80%] justify-center text-center">
                Register your company with the relevant province without going
                through the KYC and legalization procedure.
              </div>

              <div className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[90%] m-8 text-center justify-center items-center font-Bree text-[#1D233B]">
                Start with
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/nonresidentPage"
            className="flex justify-center items-center"
            onClick={handleClick1}
          >
            <div className="flex flex-col bg-white rounded-xl md:w-[370px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c48] border-3 border-[#ffffff] hover:border-[#0C9663] cursor-pointer">
              <div className="flex justify-center items-center mt-4">
                <p className="flex flex-wrap font-Bree text-[#0C9663] text-3xl">
                  Non-Resident
                </p>
                <img
                  src="img/stars.png"
                  alt="back"
                  width={15}
                  className="w-[15px] h-[15px] ml-2"
                />
              </div>

              <div className="flex justify-center items-baseline mt-4">
                <p className="text-black font-Bree text-5xl">$1199</p>
                <p className="text-black font-Bree text-xl ml-2">CAD</p>
              </div>

              <div className="flex font-Bree text-[#1D233B] font-thin text-sm mt-[15px] w-[80%] justify-center text-center">
                Unlock Canada's business potential for non-residents with tax
                incentives, and a balanced cost of living.
              </div>

              <div className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[90%] m-8 text-center justify-center items-center font-Bree text-[#1D233B]">
                Start with
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default UserPage2;
