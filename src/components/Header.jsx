import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div class="container text-center incHeader">
        <div class="row align-items-start">
          <div class="col mt-5">
            <h1>
              {" "}
              Simplify, Incorporate, Succeed <br></br> With Incpass.
              <button className="btn  btnCanada">CA</button>{" "}
            </h1>

            <p className="incPara">
              Register, incorporate, name check, local Canadian Office, and
              more—all in one place.
            </p>

            <NavLink to="/pricedata">
              <button type="button" class="btn btn-dark incHeaderBtn">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <img src="/img/incheader.png" class="card-img-top" alt="..." />
    </>
  );
}

export default Header;
