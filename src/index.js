import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./tail.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ProductProvider } from "./utils/productContext";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar />
      <ProductProvider>
        <App />
      </ProductProvider>
      <Footer />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
