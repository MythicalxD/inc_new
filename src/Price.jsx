import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Price() {
  const [showDetails1, setShowDetails1] = useState(true);
  const [showDetails2, setShowDetails2] = useState(false);

  const handleShowDetails1 = () => {
    setShowDetails1(true);
    setShowDetails2(false);
  };

  const handleShowDetails2 = () => {
    setShowDetails1(false);
    setShowDetails2(true);
  };

  return (
    <>
      <div class="container text-center boxHeader">
        <span style={{ color: "#918ea2" }}>PRICING</span>
        <h2>Plans for every business owner</h2>
        <p className="incPara">
          Whether you're starting a new business or already running one, we've
          got you covered.
        </p>

        <div>
          <button onClick={handleShowDetails1} className="pricebtn">
            Resident
          </button>
          <button onClick={handleShowDetails2} className="pricebtn">
            Non-Resident{" "}
          </button>

          {showDetails1 && (
            <div className="details m-5">
              {/* Add details for the first button here */}
              <div className="row">
                <div className="col text-start">
                  <h3 className="mt-5 mb-5">
                    Full Incorporation + <br></br> 1 year Online Minute Book
                  </h3>

                  <div className="pricing-card p">
                    <h5 className="card-title" style={{ fontSize: "56px" }}>
                      <span style={{ fontSize: "30px", color: "#918ea2" }}>
                        $
                      </span>{" "}
                      499{" "}
                      <span style={{ fontSize: "24px", color: "#918ea2" }}>
                        CAD
                      </span>
                    </h5>

                    <div className="text-start">
                      <p>
                        {" "}
                        <MdKeyboardDoubleArrowRight /> Incorporation & filings
                        with the Government
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Company Name Registration
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Company Organization
                        Documents & Share Issuances
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> IncPass Perk/Dashboard
                        Membership
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Unlimited Name Check
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Unlimited Support
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Personalized Dashboard
                      </p>
                    </div>

                    <NavLink to="/resident">
                      {" "}
                      <button type="button" class="btn btn-dark incHeaderBtn">
                        Get Started
                      </button>
                    </NavLink>
                  </div>
                </div>

                <div className="col text-start">
                  <h3 className="mt-5 mb-5">Managed Corporation Plan</h3>

                  <div
                    className="pricing-card p-5"
                    style={{ backgroundColor: "#393567" }}
                  >
                    <h5 className="card-title">
                      <span style={{ fontSize: "30px", color: "#918ea2" }}>
                        $
                      </span>
                      <span style={{ fontSize: "56px", color: "#ffffff" }}>
                        {" "}
                        599{" "}
                      </span>{" "}
                      <span style={{ fontSize: "24px", color: "#918ea2" }}>
                        CAD
                      </span>
                    </h5>

                    <div className="text-start" style={{ color: "white" }}>
                      <p>
                        {" "}
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Incorporation & filings with the Government
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Company Name Registration
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Company Organization Documents & Share Issuances
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        IncPass Perk/Dashboard Membership
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Unlimited Name Check
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Unlimited Support
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Personalized Dashboard
                      </p>
                    </div>

                    <button type="button" class="btn btn-light incHeaderBtn">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showDetails2 && (
            <div className="details m-5">
              {/* Add details for the second button here */}
              <div className="row">
                <div className="col text-start">
                  <h3 className="mt-5 mb-5">
                    Full Incorporation + <br></br> 1 year Online Minute Book
                  </h3>

                  <div className="pricing-card p">
                    <h5 className="card-title" style={{ fontSize: "56px" }}>
                      <span style={{ fontSize: "30px", color: "#918ea2" }}>
                        $
                      </span>{" "}
                      1499{" "}
                      <span style={{ fontSize: "24px", color: "#918ea2" }}>
                        CAD
                      </span>
                    </h5>

                    <div className="text-start">
                      <p>
                        {" "}
                        <MdKeyboardDoubleArrowRight /> Incorporation & filings
                        with the Government
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Company Name Registration
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Company Organization
                        Documents & Share Issuances
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> IncPass Perk/Dashboard
                        Membership
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Unlimited Name Check
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Unlimited Support
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight /> Personalized Dashboard
                      </p>
                    </div>

                    <NavLink to="/non-resident">
                      {" "}
                      <button type="button" class="btn btn-dark incHeaderBtn">
                        Get Started
                      </button>
                    </NavLink>
                  </div>
                </div>

                <div className="col text-start">
                  <h3 className="mt-5 mb-5">Managed Corporation Plan</h3>

                  <div
                    className="pricing-card p-5"
                    style={{ backgroundColor: "#393567" }}
                  >
                    <h5 className="card-title">
                      <span style={{ fontSize: "30px", color: "#918ea2" }}>
                        $
                      </span>{" "}
                      <span style={{ fontSize: "56px", color: "#ffffff" }}>
                        799
                      </span>{" "}
                      <span style={{ fontSize: "24px", color: "#918ea2" }}>
                        CAD
                      </span>
                    </h5>

                    <div className="text-start" style={{ color: "white" }}>
                      <p>
                        {" "}
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Incorporation & filings with the Government
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Company Name Registration
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Company Organization Documents & Share Issuances
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        IncPass Perk/Dashboard Membership
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Unlimited Name Check
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Unlimited Support
                      </p>
                      <p>
                        <MdKeyboardDoubleArrowRight
                          style={{ color: "white" }}
                        />{" "}
                        Personalized Dashboard
                      </p>
                    </div>

                    <button type="button" class="btn btn-danger incHeaderBtn">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Price;
