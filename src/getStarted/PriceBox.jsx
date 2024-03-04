import React from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";

function PriceBox() {
  return (
    <>
      <div class="bg-[#F6FAFD] h-screen flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Let’s Get Your Business Started
        </div>
        <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%] justify-center text-center">
          Welcome, get your business going in just a few clicks. We recommend
          the right products and services to help set you up for success.
        </div>
        <div className="flex md:flex-row flex-col md:w-[60%] gap-y-4 justify-evenly items-start mt-16">
          <NavLink to="/resident">
            <div className="flex flex-col bg-white rounded-xl w-[370px] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c4f] hover:border-[#0C9663] border-[#ffffff] border-3 cursor-pointer">
              <div className="flex justify-center items-center mt-4">
                <p className="flex font-Bree text-[#0C9663] text-3xl">
                  Resident
                </p>
                <img
                  src="img/stars.png"
                  width={15}
                  height={15}
                  alt="stars"
                  className="h-[15px] w-[15px] ml-2"
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

          <NavLink to="/non-resident">
            <div className="flex flex-col bg-white rounded-xl w-[370px] justify-center items-center hover:shadow-lg shadow-md shadow-[#33f28c48] border-3 border-[#ffffff] hover:border-[#0C9663] cursor-pointer">
              <div className="flex justify-center items-center mt-4">
                <p className="flex font-Bree text-[#0C9663] text-3xl">
                  Non-Resident
                </p>
                <img
                  src="img/stars.png"
                  width={15}
                  height={15}
                  alt="stars"
                  className="h-[15px] w-[15px] ml-2"
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

export default PriceBox;
