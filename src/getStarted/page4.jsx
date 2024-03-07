import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";

let price1 = 0;
let price2 = 0;

function Months() {
  const { selectedProducts, addProduct } = useProductContext();

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    if (optionValue === "1") {
      price1 = 399;
    } else if (optionValue === "2") {
      price1 = 599;
    } else if (optionValue === "3") {
      price1 = 899;
    } else if (optionValue === "34") {
      price1 = 0;
    }
    calcAmount();
  };

  const handleOptionClick1 = (optionValue) => {
    setSelectedOption1(optionValue);
    if (optionValue === "1") {
      price2 = 399;
    } else if (optionValue === "2") {
      price2 = 0;
    }
    calcAmount();
  };

  const [price, setPrice] = useState(
    parseInt(localStorage.getItem("total_ca"))
  );
  const [priceNew, setPriceNew] = useState(
    parseInt(localStorage.getItem("total_ca"))
  );

  const calcAmount = () => {
    setPriceNew(price + price1 + price2);
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

  const handleSubmit = async () => {
    if (selectedOption === "" || selectedOption1 === "") {
      return;
    }

    localStorage.setItem("selectedProducts", JSON.stringify([]));
    if (selectedOption === "1") {
      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = [
        ...selectedProducts,
        { productId: "15", quantity: 1 },
      ];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    }
    if (selectedOption === "2") {
      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = [
        ...selectedProducts,
        { productId: "16", quantity: 1 },
      ];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    }
    if (selectedOption === "3") {
      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = [
        ...selectedProducts,
        { productId: "17", quantity: 1 },
      ];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    }

    if (selectedOption1 === "1") {
      const selectedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = [
        ...selectedProducts,
        { productId: "18", quantity: 1 },
      ];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    }

    await handleCart();
    window.location.href = "/book";
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
      localStorage.setItem("selectedProducts", JSON.stringify([]));
      const redirect_val = localStorage.getItem("res");
      console.log(redirect_val);
      window.location.href =
        redirect_val === "true" ? "/shareHolder" : "/shareHoldernonResident";

      console.log("back successful", data);
    } catch (error) {
      console.error("Error back", error);
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
      <div className="bg-[#F6FAFD] min-h-screen flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Please select the months for your office address
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          A virtual office utilizes a physical location that receives mail for
          you and can serve as an official business address for your company. It
          allows you to have a physical presence in any city without the bloated
          costs of office space rentals.
        </div>
        <div className="flex flex-col md:w-[70%] w-screen gap-y-8 md:justify-evenly justify-center md:items-center items-center mt-16">
          <div className="flex md:flex-row flex-col justify-evenly gap-x-12 gap-y-4">
            <div
              className="flex justify-center items-center"
              onClick={() => handleOptionClick("1")}
            >
              <div
                className={`flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] w-[350px] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-3 cursor-pointer ${
                  selectedOption === "1"
                    ? "border-[#0C9663] bg-[#d6ffcf]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex justify-center items-center mt-0">
                    <p className="flex font-Bree text-[#0C9663] text-3xl">
                      3 Months
                    </p>
                  </div>

                  <div className="flex justify-center items-baseline mt-2">
                    <p className="text-black font-Bree text-5xl">$399</p>
                    <p className="text-black font-Bree text-xl ml-2">CAD</p>
                  </div>
                </div>
                <img
                  src="img/mail5.png"
                  alt="back"
                  className="md:w-[150px] w-[120px] cursor-pointer m-4 ml-8"
                />
              </div>
            </div>

            <NavLink
              className="flex justify-center items-center"
              onClick={() => handleOptionClick("2")}
            >
              <div
                className={`flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] w-[350px] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-3 cursor-pointer ${
                  selectedOption === "2"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex justify-center items-center mt-0">
                    <p className="flex font-Bree text-[#0C9663] text-3xl">
                      6 Months
                    </p>
                  </div>

                  <div className="flex justify-center items-baseline mt-2">
                    <p className="text-black font-Bree text-5xl">$599</p>
                    <p className="text-black font-Bree text-xl ml-2">CAD</p>
                  </div>
                </div>
                <img
                  src="img/mail5.png"
                  alt="back"
                  className="md:w-[150px] w-[120px] cursor-pointer m-4 ml-8"
                />
              </div>
            </NavLink>
          </div>

          <div className="flex md:flex-row flex-col justify-evenly gap-x-12 gap-y-4">
            <NavLink
              className="flex justify-center items-center"
              onClick={() => handleOptionClick("3")}
            >
              <div
                className={`flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] w-[350px] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-3 cursor-pointer ${
                  selectedOption === "3"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex justify-center items-center mt-0">
                    <p className="flex font-Bree text-[#0C9663] text-3xl">
                      12 Months
                    </p>
                  </div>

                  <div className="flex justify-center items-baseline mt-2">
                    <p className="text-black font-Bree text-5xl">$899</p>
                    <p className="text-black font-Bree text-xl ml-2">CAD</p>
                  </div>
                </div>
                <img
                  src="img/mail20.png"
                  alt="back"
                  className="md:w-[150px] w-[120px] cursor-pointer m-4 ml-8"
                />
              </div>
            </NavLink>

            <NavLink
              className="flex justify-center items-center"
              onClick={() => handleOptionClick("4")}
            >
              <div
                className={`flex flex-row bg-[#F4FCF3] h-[170px] rounded-xl md:w-[400px] w-[350px] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-3 cursor-pointer ${
                  selectedOption === "4"
                    ? "border-[#0C9663] bg-[#e7ffe3]"
                    : "border-[#F4FCF3] bg-[#F4FCF3]"
                }`}
              >
                <div className="flex flex-col">
                  <p className="text-black font-Bree text-xl ml-2">
                    No, thanks. I have my own office space.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="flex h-[1px] w-full bg-zinc-300 mt-[50px]"></div>

        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Corporate Minute Book
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Select an option for minute book:
        </div>
        <div className="flex flex-col relative md:w-[70%] gap-y-8 md:justify-evenly justify-center md:items-start items-center mt-0">
          <img
            src="img/tag.png"
            alt="back"
            className="absolute top-7 md:right-[-20px] right-0 w-[200px]"
          />
          <div
            className={`flex flex-col w-full m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer ${
              selectedOption1 === "1"
                ? "border-[#0C9663] bg-[#e7ffe3]"
                : "border-[#F4FCF3] bg-[#F4FCF3]"
            }`}
            onClick={() => handleOptionClick1("1")}
          >
            <div className="flex">
              <div className="font-Bree text-[#1D233B] text-3xl ml-2 mr-4 md:mt-0 mt-8">
                Essential Corporate Minute Book (Electronic Copy)
              </div>
            </div>
            <div className="flex items-baseline mt-2 ml-2">
              <p className="text-black font-Bree text-4xl">$399</p>
              <p className="text-black font-Bree text-xl ml-2">CAD</p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">
                Shareholder Resolution Dispensing With Auditor
              </p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">
                Subscription For Shares
              </p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">
                Director Consent
              </p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">
                First Director Resolution
              </p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">By-Laws</p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">
                Notice of Articles
              </p>
            </div>

            <div className="flex items-center mt-2">
              <img
                src="img/check.png"
                alt="back"
                className="w-[30px] h-[30px] m-1"
              />
              <p className="text-[#536174] font-Bree text-sm">
                Notice Of Issuance Of Uncertified Share
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-[70%] gap-y-8 md:justify-evenly justify-center md:items-start items-center ">
          <div
            className={`flex flex-col w-full m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer ${
              selectedOption1 === "2"
                ? "border-[#0C9663] bg-[#e7ffe3]"
                : "border-[#F4FCF3] bg-[#F4FCF3]"
            }`}
            onClick={() => handleOptionClick1("2")}
          >
            <div className="flex">
              <div className="font-Bree text-[#1D233B] text-3xl ml-2 mr-4">
                No thanks, do it later for
              </div>
            </div>
            <div className="flex items-baseline mt-2 ml-2">
              <p className="text-black font-Bree text-4xl">$699</p>
              <p className="text-black font-Bree text-xl ml-2">CAD</p>
            </div>
          </div>
        </div>
        <div className="flex items-baseline mt-12 ml-2">
          <p className="text-black font-Bree text-3xl">Total Price : </p>
          <p className="text-black font-Bree text-3xl">${priceNew}</p>
          <p className="text-black font-Bree text-xl ml-2">CAD</p>
        </div>
        <div
          className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[20%] m-8 mt-6 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
          onClick={handleSubmit}
        >
          Next
        </div>
      </div>
    </>
  );
}

export default Months;
