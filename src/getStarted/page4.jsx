import React from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";

function Months() {
  const { selectedProducts, addProduct } = useProductContext();
  const handleClick = () => {
    addProduct("3", 1); // Example product and quantity
    handleCart();
    console.log(selectedProducts);
  };
  const handleClick1 = () => {
    addProduct("4", 1); // Example product and quantity
    handleCart();
    console.log(selectedProducts);
  };

  let price;

  const handleSubmit = async () => {
    window.location.href = "/shareHolder";
  };

  const handleCardClick = (countryValue) => {};

  const handleCart = async (event) => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

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

      console.log("cart applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

  return (
    <>
      <NavLink to="/shareHolder">
        <img
          src="img/back.png"
          alt="back"
          className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
        />
      </NavLink>
      <div className="bg-[#F6FAFD] flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Please select the months for your office address
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          A virtual office utilizes a physical location that receives mail for
          you and can serve as an official business address for your company. It
          allows you to have a physical presence in any city without the bloated
          costs of office space rentals.
        </div>
        <div className="flex flex-col md:w-[60%] gap-y-8 md:justify-evenly justify-center md:items-start items-center mt-16">
          <div className="flex justify-evenly gap-x-12">
            <NavLink
              className="flex justify-center items-center"
              onClick={handleClick}
            >
              <div className="flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#F4FCF3] border-3 cursor-pointer">
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
                  className="w-[150px] cursor-pointer m-4 ml-8"
                />
              </div>
            </NavLink>

            <NavLink
              className="flex justify-center items-center"
              onClick={handleClick}
            >
              <div className="flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#F4FCF3] border-3 cursor-pointer">
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
                  className="w-[150px] cursor-pointer m-4 ml-8"
                />
              </div>
            </NavLink>
          </div>

          <div className="flex gap-x-12">
            <NavLink
              className="flex justify-center items-center"
              onClick={handleClick}
            >
              <div className="flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#F4FCF3] border-3 cursor-pointer">
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
                  className="w-[150px] cursor-pointer m-4 ml-8"
                />
              </div>
            </NavLink>

            <NavLink
              className="flex justify-center items-center"
              onClick={handleClick}
            >
              <div className="flex flex-row bg-[#F4FCF3] rounded-xl md:w-[400px] h-[170px] w-[90%] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#F4FCF3] border-3 cursor-pointer">
                <div className="flex flex-col">
                  <p className="text-black font-Bree text-xl ml-2">
                    No, thanks. I have my own office space.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Corporate Minute Book
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Select an option for minute book:
        </div>
        <div className="flex flex-col md:w-[60%] gap-y-8 md:justify-evenly justify-center md:items-start items-center mt-0">
          <div
            className="flex flex-col w-full m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer"
            onClick={() => handleCardClick("1")}
          >
            <div className="flex">
              <div className="font-Bree text-[#1D233B] text-3xl ml-2 mr-4">
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
        <div className="flex flex-col md:w-[60%] gap-y-8 md:justify-evenly justify-center md:items-start items-center ">
          <div
            className="flex flex-col w-full m-4 p-4 bg-[#F4FCF3] rounded-lg shadow hover:border-green-700 border-2 cursor-pointer"
            onClick={() => handleCardClick("1")}
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
    </>
  );
}

export default Months;
