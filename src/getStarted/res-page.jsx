import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";

function ResidentPage() {
  const { selectedProducts, addProduct } = useProductContext();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  let price = parseInt(localStorage.getItem("total_ca"));

  if (selectedCountry === "1") {
    price = price + 499;
  } else if (selectedCountry === "2") {
    price = price + 499;
  } else if (selectedCountry === "3") {
    if (selectedOption === "no") {
      price = price + 799;
    } else {
      price = price;
    }
  } else {
    price = parseInt(localStorage.getItem("total_ca")); // Handle default case
  }

  const handleClick = () => {
    addProduct("5", 1); // Example product and quantity
    console.log(selectedProducts);
  };
  const handleClick1 = () => {
    addProduct("6", 1); // Example product and quantity
    console.log(selectedProducts);
  };

  const handleClick2 = () => {
    addProduct("7", 1); // Example product and quantity
    console.log(selectedProducts);
  };

  const handleClick3 = () => {
    addProduct("8", 1); // Example product and quantity
    console.log(selectedProducts);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCardClick = (countryValue) => {
    setSelectedCountry(countryValue);
  };

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleSubmit = async () => {
    if (selectedCountry == "1") {
      await handleClick();
    } else if (selectedCountry == "2") {
      await handleClick1();
    } else if (selectedCountry == "3") {
      await handleClick2();
      if (selectedOption == "yes") {
        await handleClick3();
      }
    }
    window.location.href = "/shareHolder";
  };

  return (
    <>
      <NavLink to="/resident">
        <img
          src="img/back.png"
          alt="back"
          className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
        />
      </NavLink>
      <div className="bg-[#F6FAFD] h-[120vh] flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Please Select your province
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Confirm where your business is located.
        </div>
        <div className="flex md:flex-row flex-col h-[400px]">
          <div className="flex md:w-[55vw] items-center mt-20 md:ml-[20px] h-full">
            <div className="flex flex-wrap">
              <div
                className="flex flex-col h-[180px] w-[330px] m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer"
                onClick={() => handleCardClick("1")}
              >
                <div className="flex">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="country"
                      className="flex"
                      value="1"
                      checked={selectedCountry === "1"}
                    />
                  </label>
                  <div className="font-Bree text-[#1D233B] text-3xl ml-4">
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
              </div>
              <div
                className="flex flex-col h-[180px] w-[330px] m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer"
                onClick={() => handleCardClick("2")}
              >
                <div className="flex">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="country"
                      className="flex"
                      value="1"
                      checked={selectedCountry === "2"}
                    />
                  </label>
                  <div className="font-Bree text-[#1D233B] text-3xl ml-4">
                    British Columbia
                  </div>
                </div>
                <div className="flex items-baseline mt-4">
                  <p className="text-black font-Bree text-5xl">$499</p>
                  <p className="text-black font-Bree text-xl ml-2">CAD</p>
                </div>
              </div>
              <div
                className="flex flex-col h-[180px] w-[330px] m-4 mt-2 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer"
                onClick={() => handleCardClick("3")}
              >
                <div className="flex">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="country"
                      className="flex"
                      value="1"
                      checked={selectedCountry === "3"}
                    />
                  </label>
                  <div className="font-Bree text-[#1D233B] text-3xl ml-4">
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
          <div className="flex h-[150%] w-[1px] bg-zinc-300 mr-[70px] ml-[40px] mt-[50px]"></div>
          <div className="flex w-[30vw] mt-12">
            <div className="flex flex-col">
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

              <div className="flex items-baseline mt-4 ml-2">
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
