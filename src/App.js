import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Price from "./Price";
import Resident from "./Resident";
import PriceBox from "./getStarted/page1";
import Nonresident from "./Nonresident";
import Company from "./components/Company";
import Article1 from "./Blogs/Article1";
import LoginPage from "./login/login";

import { ProductProvider } from "./utils/productContext";
import UserPage2 from "./getStarted/page2";
import ResidentPage from "./getStarted/res-page";
import StakeHolder from "./getStarted/page3";
import Months from "./getStarted/page4";
import Book from "./getStarted/page5";
import NonResidentPage from "./getStarted/non-res-page";
import StakeHolderNonResident from "./getStarted/page3non";
import StripePaymentWidget from "./getStarted/payment";
import DonePayment from "./getStarted/done";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pricedata" element={<PriceBox />}></Route>
          <Route path="/resident" element={<UserPage2 />}></Route>
          <Route path="/residentPage" element={<ResidentPage />}></Route>
          <Route path="/nonresidentPage" element={<NonResidentPage />}></Route>
          <Route path="/shareHolder" element={<StakeHolder />}></Route>
          <Route
            path="/shareHoldernonResident"
            element={<StakeHolderNonResident />}
          ></Route>
          <Route path="/months" element={<Months />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/pay" element={<StripePaymentWidget />}></Route>
          <Route path="/done" element={<DonePayment />}></Route>
          <Route path="/resource" element={<Company />}></Route>
          <Route path="/article01" element={<Article1 />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </ProductProvider>
    </>
  );
};

export default App;
