import React from "react";

import { NavLink } from "react-router-dom";
import { useProductContext } from "../utils/productContext";

function Navbar() {
 
  return (
    <>
      <div class="sc-hEsumM dQRPmw">
        {/* <p> INCPASS INCORPORATION FEE START WITH $499  <NavLink to="/pricedata" className='headingLink'><b>START NOW</b></NavLink></p> */}
      </div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary navIncpass">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">
            <img
              src="/img/incpasslogo.png"
              className="logo"
              alt="incpass logo"
            />
          </NavLink>
          <NavLink to="/pricedata">
            <button type="button" class="btn btn-dark navBtnMobile">
              Get Started{" "}
            </button>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solution
            </NavLink>
            <ul class="dropdown-menu">
              <li><NavLink class="dropdown-item" to="/">Start A Business</NavLink></li>
              <li><NavLink class="dropdown-item" to="/">Manage Your Corporation</NavLink></li>
              <li><hr class="dropdown-divider"/></li>
              <li><NavLink class="dropdown-item"to="/">Optimize Corporate Work</NavLink></li>
            </ul>
          </li> */}

              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/resource"
                >
                  Resource
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/pricing"
                >
                  About
                </NavLink>
              </li>

              {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resource
            </a>
            <ul class="dropdown-menu">
              <li><NavLink class="dropdown-item" to="/">Business Guides</NavLink></li>
              <li><NavLink class="dropdown-item" to="/">Perks</NavLink></li>
              <li><hr class="dropdown-divider"/></li>
              <li><NavLink class="dropdown-item" to="/">Customer Supports</NavLink></li>
            </ul>
          </li> */}

              {/* <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </NavLink>
            <ul class="dropdown-menu">
              <li><NavLink class="dropdown-item" href="#">About</NavLink></li>
              <li><NavLink class="dropdown-item" href="#">Reviews</NavLink></li>
              <li><NavLink class="dropdown-item" href="#">Partners</NavLink></li>
              <li><NavLink class="dropdown-item" href="#">Contact Us</NavLink></li>
              <li><hr class="dropdown-divider"/></li>
              <li><NavLink class="dropdown-item" href="#">Press</NavLink></li>
            </ul>
          </li> */}
            </ul>

            <div className="navSignIn">
              {/* <NavLink to='/login' class="nav-link " aria-current="page" href="#">Sign In</NavLink> */}
            </div>

            <NavLink to="/pricedata">
              <button type="button" class="btn btn-dark navBtn">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
