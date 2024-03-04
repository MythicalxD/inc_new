import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Price from "./Price";
import Resident from "./Resident";
import PriceBox from "./getStarted/PriceBox";
import Nonresident from "./Nonresident";
import Company from "./components/Company";
import Article1 from "./Blogs/Article1";
import LoginPage from "./login/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Price />}></Route>
        <Route path="/pricedata" element={<PriceBox />}></Route>
        <Route path="/resident" element={<Resident />}></Route>
        <Route path="/non-resident" element={<Nonresident />}></Route>
        <Route path="/resource" element={<Company />}></Route>
        <Route path="/article01" element={<Article1 />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
