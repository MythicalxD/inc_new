import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";

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
        <div className="flex md:flex-row flex-col md:w-[60%] gap-y-4 md:justify-evenly justify-center md:items-start items-center mt-16"></div>
      </div>
    </>
  );
}

export default StakeHolder;
