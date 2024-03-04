import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";

function PriceBox() {
  const { selectedProducts, addProduct, createNew } = useProductContext();

  const handleCart = async (event) => {
    event.preventDefault();

    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      // Construct the items array based on selectedProducts
      const items = selectedProducts.map(({ productId, quantity }) => ({
        productId,
        quantity: quantity || 1, // Set quantity to 1 if not provided
      }));

      const registerData = { items }; // Create the payload

      const response = await fetch("http://localhost:5666/cart/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
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

  const handleClick = () => {
    addProduct("1", 1); // Example product and quantity
    handleCart();
    console.log(selectedProducts);
  };
  const handleClick1 = () => {
    addProduct("2", 1); // Example product and quantity
    handleCart();
    console.log(selectedProducts);
  };
  useEffect(() => {
    createNew(); // Call createNew when the component mounts
  }, []); // Empty dependency array ensures it only runs once
  return (
    <>
      <div className="bg-[#F6FAFD] h-screen flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Let’s Get Started
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Selecting the appropriate Incorporation Type
        </div>
        <div className="flex md:flex-row flex-col md:w-[60%] gap-y-4 md:justify-evenly justify-center md:items-start items-center mt-16">
          <NavLink
            to="/login"
            className="flex justify-center items-center"
            onClick={handleClick}
          >
            <div className="flex flex-col bg-white rounded-xl md:w-[400px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#ffffff] border-3 cursor-pointer">
              <div className="flex justify-center items-center mt-4">
                <p className="flex font-Bree text-[#0C9663] text-3xl">
                  Standard Incorporation
                </p>
              </div>

              <div className="flex justify-center items-baseline mt-4">
                <p className="text-black font-Bree text-5xl">$49</p>
                <p className="text-black font-Bree text-xl ml-2">CAD</p>
              </div>

              <div className="flex font-Bree text-[#1D233B] font-thin text-sm mt-[15px] w-[80%] justify-center text-center">
                Start your Canadian Incorporation with in 21 to 25 business days
              </div>

              <div className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[90%] m-8 text-center justify-center items-center font-Bree text-[#1D233B]">
                Start with
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/login"
            className="flex justify-center items-center"
            onClick={handleClick1}
          >
            <div className="flex flex-col bg-white rounded-xl md:w-[400px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c48] border-3 border-[#ffffff] hover:border-[#0C9663] cursor-pointer">
              <div className="flex justify-center items-center mt-4">
                <p className="flex flex-wrap font-Bree text-[#0C9663] text-3xl">
                  Rush Incorporation
                </p>
              </div>

              <div className="flex justify-center items-baseline mt-4">
                <p className="text-black font-Bree text-5xl">$249</p>
                <p className="text-black font-Bree text-xl ml-2">CAD</p>
              </div>

              <div className="flex font-Bree text-[#1D233B] font-thin text-sm mt-[15px] w-[80%] justify-center text-center">
                The standard timeline for incorporating a company spans just 7
                working days.
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

export default PriceBox;
