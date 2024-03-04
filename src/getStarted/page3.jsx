import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";

function StakeHolder() {
  const { selectedProducts, addProduct, createNew } = useProductContext();

  const handleClick = () => {
    addProduct("1", 1); // Example product and quantity
    console.log(selectedProducts);
  };
  const handleClick1 = () => {
    addProduct("2", 1); // Example product and quantity
    console.log(selectedProducts);
  };

  // Define state to hold the selected value
  const [selectedValue, setSelectedValue] = useState("");

  // Event handler for when the dropdown value changes
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="bg-[#F6FAFD] h-screen flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          How many Shareholders?
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Choose the number of shareholders and specify if the shareholder is a
          corporation.
        </div>
        <div className="flex md:flex-row flex-col md:w-[60%] gap-y-4 md:justify-evenly justify-center md:items-start items-center mt-16">
          <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
            We are required to run a through one time background check of a
            non-Canadian shareholders. One time fee of $350 CAD will be
            incurred.
          </div>

          <label htmlFor="dropdown">Select an option:</label>

          <select
            id="dropdown"
            value={selectedValue}
            onChange={handleSelectChange}
            className="w-[300px] rounded shadow p-2 m-3"
          >
            <option value="">Select...</option>
            <option value="350">1x $350 CAD</option>
            <option value="700">2x $350 CAD</option>
            <option value="1050">3x $350 CAD</option>
            <option value="1400">4x $350 CAD</option>
          </select>
          <p>Selected value: {selectedValue}</p>
        </div>
      </div>
    </>
  );
}

export default StakeHolder;
