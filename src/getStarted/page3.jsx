import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";

function StakeHolder() {
  const {
    selectedProducts,
    addProduct,
    createNew,
    addProductRemove,
    removeProduct,
  } = useProductContext();

  const handleClick = (num) => {
    addProduct("13", num); // Example product and quantity
    console.log(selectedProducts);
  };
  const handleClick1 = () => {
    addProduct("14", 1); // Example product and quantity
    console.log(selectedProducts);
  };
  const handleClick3 = (num) => {
    addProduct("13", num); // Example product and quantity
    console.log(selectedProducts);
  };

  // Define state to hold the selected value
  const [selectedValue, setSelectedValue] = useState(""); // 13
  const [selectedValue1, setSelectedValue1] = useState(""); // 14
  const [selectedValue2, setSelectedValue2] = useState(""); // none
  const [selectedValue3, setSelectedValue3] = useState(""); // 13
  const [price, setPrice] = useState(0);

  // Event handler for when the dropdown value changes
  const handleSelectChange = async (event) => {
    setSelectedValue(event.target.value);
    setPrice(parseInt(event.target.value) * 150);
    await removeProduct("13");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await addProduct("13", parseInt(selectedValue));
  };

  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
    setPrice(price + parseInt(event.target.value));
  };

  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const handleSelectChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedValue1 == "750") {
      await addProduct("14", 1);
    }
    if (selectedValue2 == "no") {
      await addProduct("13", parseInt(selectedValue3));
    }
    await addProduct("13", parseInt(selectedValue));

    window.location.href = "/months";
  };

  return (
    <>
      <NavLink to="/residentPage">
        <img
          src="img/back.png"
          alt="back"
          className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
        />
      </NavLink>
      <div className="bg-[#F6FAFD] flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          How many Shareholders?
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Choose the number of shareholders and specify if the shareholder is a
          corporation.
        </div>
        <div className="flex md:flex-row flex-col md:w-[60%] gap-y-4 md:justify-evenly justify-center md:items-start items-center mt-16">
          <div className="flex flex-col">
            <div className="flex flex-col justify-start items-start">
              <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] ">
                Number of Shareholders
              </div>
              <div className="flex font-Bree text-[#42475b] text-md mt-[10px]">
                We are required to run a through one time background check of a
                non-Canadian shareholders. One time fee of $350 CAD will be
                incurred.
              </div>
              <select
                id="dropdown"
                value={selectedValue}
                onChange={handleSelectChange}
                className="w-[300px] rounded shadow-sm p-2 mt-4"
              >
                <option value="">Select...</option>
                <option value="1">1x $150 CAD</option>
                <option value="2">2x $150 CAD</option>
                <option value="3">3x $150 CAD</option>
                <option value="4">4x $150 CAD</option>
              </select>{" "}
            </div>
            <div className="flex flex-col justify-start items-start mt-4">
              <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] ">
                Is Shareholder Corporate?
              </div>
              <div className="flex font-Bree text-[#42475b] text-md mt-[10px]">
                If the shareholder of a Canadian corporation is another
                corporate entity, additional documents such as the incorporation
                certificate and articles of incorporation need to be legally
                verified.
              </div>
              <select
                id="dropdown1"
                value={selectedValue1}
                onChange={handleSelectChange1}
                className="w-[300px] rounded shadow-sm p-2 mt-2"
              >
                <option value="">Select...</option>
                <option value="750">yes +750 CAD</option>
                <option value="0">no</option>
              </select>
            </div>

            <div className="flex flex-col justify-start items-start mt-4">
              <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] ">
                Is Director Same as Shareholder?
              </div>
              <select
                id="dropdown2"
                value={selectedValue2}
                onChange={handleSelectChange2}
                className="w-[300px] rounded shadow-sm p-2 mt-2"
              >
                <option value="">Select...</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            {selectedValue2 == "no" && (
              <div className="flex flex-col justify-start items-start mt-8">
                <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] ">
                  Number of Directors:
                </div>
                <select
                  id="dropdown3"
                  value={selectedValue3}
                  onChange={handleSelectChange3}
                  className="w-[300px] rounded shadow-sm p-2 mt-4"
                >
                  <option value="">Select...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            )}

            <div className="flex items-baseline mt-12 ml-2">
              <p className="text-black font-Bree text-3xl">Total Price : </p>
              <p className="text-black font-Bree text-3xl">${price}</p>
              <p className="text-black font-Bree text-xl ml-2">CAD</p>
            </div>

            <div
              className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[30%] m-2 mt-4 mb-12 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
              onClick={handleSubmit}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StakeHolder;
