import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";

function ResidentPage() {
  const { addProduct, createNew } = useProductContext();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [price, setPrice] = useState(
    parseInt(localStorage.getItem("total_ca"))
  );

  const handleCardClick = (countryValue) => {
    setSelectedCountry(countryValue);
    if (countryValue === "1") {
      setPrice(parseInt(localStorage.getItem("total_ca")) + 499);
    } else if (countryValue === "2") {
      setPrice(parseInt(localStorage.getItem("total_ca")) + 499);
    } else if (countryValue === "3") {
      setPrice(parseInt(localStorage.getItem("total_ca")) + 799);
    }
  };

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    if (selectedCountry === "3" && optionValue === "no") {
      setPrice(parseInt(localStorage.getItem("total_ca")) + 799 + 799);
    }
    if (selectedCountry === "3" && optionValue === "yes") {
      setPrice(parseInt(localStorage.getItem("total_ca")) + 799);
    }
  };

  const handleSubmit = async () => {
    if (selectedCountry === "") {
      return;
    }

    if (selectedCountry === "3" && selectedOption === "") {
      return;
    }

    localStorage.setItem("selectedProducts", JSON.stringify([]));

    if (selectedCountry === "1") {
      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = [
        ...selectedProducts,
        { productId: "5", quantity: 1 },
      ];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    } else if (selectedCountry === "2") {
      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = [
        ...selectedProducts,
        { productId: "6", quantity: 1 },
      ];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    } else if (selectedCountry === "3") {
      if (selectedOption == "no") {
        const selectedProducts =
          JSON.parse(localStorage.getItem("selectedProducts")) || [];
        const updatedProducts = [
          ...selectedProducts,
          { productId: "7", quantity: 1 },
          { productId: "8", quantity: 1 },
        ];
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
      } else {
        const selectedProducts =
          JSON.parse(localStorage.getItem("selectedProducts")) || [];
        const updatedProducts = [
          ...selectedProducts,
          { productId: "7", quantity: 1 },
        ];
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
      }
    }
    await handleCart();
    window.location.href = "/shareHolder";
  };

  const handleCart = async (event) => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      // Construct the items array based on selectedProducts

      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];

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

      console.log("cart applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

  const backButton = async () => {
    const selectedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const productIds = selectedProducts.map((item) => item.productId);
    const dataToSend = { productIds };

    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const response = await fetch(`${API}cart/cart/items`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("back failed");
      }

      const data = await response.json();
      localStorage.setItem("total_ca", data.total);
      window.location.href = "/priceData";

      console.log("back successful", data);
    } catch (error) {
      console.error("Error back", error);
      window.location.href = "/home";
    }
  };

  return (
    <>
      <div onClick={backButton}>
        <img
          src="img/back.png"
          alt="back"
          className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
        />
      </div>
      <div className="bg-[#F6FAFD] min-h-screen md:h-[130vh] h-[220vh] flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Please Select your province
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Confirm where your business is located.
        </div>
        <div className="flex md:flex-row flex-col h-[400px] mt-[120px]">
          <div className="flex md:w-[55vw] items-center md:mt-16 mt-[130px] md:ml-[20px] h-full">
            <div className="flex flex-wrap">
              {/* <div
                className={`flex flex-col h-[180px] w-[330px] m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer ${
                  selectedCountry === "1"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
                onClick={() => handleCardClick("1")}
              >
                <div className="flex">
                  <div className="font-Bree text-[#1D233B] text-3xl ml-0">
                    Ontario
                  </div>
                </div>
                <div className="flex items-baseline mt-2">
                  <p className="text-black font-Bree text-4xl">$499</p>
                  <p className="text-black font-Bree text-xl ml-2">CAD</p>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    src="img/check.png"
                    alt="back"
                    className="w-[30px] h-[30px] m-1"
                  />
                  <p className="text-[#536174] font-Bree text-sm">
                    Introduction to Canadian Local Banks
                  </p>
                </div>
              </div> */}
              <div
                className={`flex flex-col h-[180px] w-[330px] m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer ${
                  selectedCountry === "1"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
                onClick={() => handleCardClick("1")}
              >
                <div className="flex">
                  <div className="font-Bree text-[#1D233B] text-3xl ml-0">
                    Ontario
                  </div>
                </div>
                <div className="flex items-baseline mt-4">
                  <p className="text-black font-Bree text-5xl">$499</p>
                  <p className="text-black font-Bree text-xl ml-2">CAD</p>
                </div>
              </div>
              <div
                className={`flex flex-col h-[180px] w-[330px] m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer ${
                  selectedCountry === "2"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
                onClick={() => handleCardClick("2")}
              >
                <div className="flex">
                  <div className="font-Bree text-[#1D233B] text-3xl ml-0">
                    British Columbia
                  </div>
                </div>
                <div className="flex items-baseline mt-4">
                  <p className="text-black font-Bree text-5xl">$499</p>
                  <p className="text-black font-Bree text-xl ml-2">CAD</p>
                </div>
              </div>
              <div
                className={`flex flex-col h-[180px] w-[330px] m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer ${
                  selectedCountry === "3"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
                onClick={() => handleCardClick("3")}
              >
                <div className="flex">
                  <div className="font-Bree text-[#1D233B] text-3xl ml-0">
                    Alberta
                  </div>
                </div>
                <div className="flex items-baseline mt-4">
                  <p className="text-black font-Bree text-5xl">$799</p>
                  <p className="text-black font-Bree text-xl ml-2">CAD</p>
                </div>
              </div>
              {selectedCountry === "3" && (
                <div className="flex flex-col w-full">
                  <div className="flex w-full h-[1px] bg-zinc-300 mt-[20px]"></div>
                  <div className="flex items-center mt-6">
                    <div className="font-Bree text-[#1D233B] text-xl ml-4">
                      Do you have registered local alberta agent ??
                    </div>
                    <label
                      className="flex justify-center items-center ml-[20px] cursor-pointer"
                      onClick={() => handleOptionClick("yes")}
                    >
                      <input
                        type="radio"
                        name="country"
                        className="text-xl"
                        value="1"
                        checked={selectedOption === "yes"}
                      />
                      <p className="ml-2 font-Bree text-lg">yes</p>
                    </label>
                    <label
                      className="flex justify-center items-center ml-[20px] cursor-pointer"
                      onClick={() => handleOptionClick("no")}
                    >
                      <input
                        type="radio"
                        name="country"
                        className="text-xl"
                        value="1"
                        checked={selectedOption === "no"}
                      />
                      <p className="ml-2 font-Bree text-xl">no</p>
                    </label>
                  </div>
                  {selectedOption === "no" && (
                    <p className="ml-4 mt-[30px] font-Bree text-xl text-zinc-500 w-[70%]">
                      An amount of $799 cad will be charged for allocation of
                      local agent with an Alberta Id
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex h-[150%] w-[1px] bg-zinc-300 mr-[70px] ml-[40px] mt-[130px]"></div>
          <div className="flex md:w-[30vw] md:mt-12 mt-[120px]">
            <div className="flex flex-col md:m-0 m-8">
              <div className="flex font-Bree text-[#1D233B] text-lg mt-[10px] justify-center text-start">
                Resident Director Document Legalization
              </div>

              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">
                  Preparation of the Articles of Incorporation
                </p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">
                  Filling of the Articles
                </p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">Name Search</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">
                  Government Filing Fee
                </p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">
                  Certificate of Incorporation
                </p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">
                  Business Identification Number (BIN) Registration
                </p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="img/check.png"
                  alt="back"
                  className="w-[30px] h-[30px] m-1"
                />
                <p className="text-[#536174] font-Bree text-sm">
                  Introduction to Canadian Local Banks
                </p>
              </div>

              <div className="flex items-baseline mt-4 ml-2 w-full">
                <p className="text-black font-Bree text-3xl">Total Price : </p>
                <p className="text-black font-Bree text-3xl">${price}</p>
                <p className="text-black font-Bree text-xl ml-2">CAD</p>
              </div>
              <div
                className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[60%] m-2 mt-6 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
                onClick={handleSubmit}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResidentPage;
