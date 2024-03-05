import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";
import StripePaymentWidget from "./payment";

function Book() {
  const { selectedProducts, addProduct } = useProductContext();
  const [stripePromise, setStripePromise] = useState(null);

  const handleClick = () => {
    addProduct("3", 1); // Example product and quantity
    handleCart();
    console.log(selectedProducts);
  };
  const handleClick1 = () => {
    addProduct("4", 1); // Example product and quantity
    handleCart();
    console.log(selectedProducts);
  };

  const [selectedOption, setSelectedOption] = useState("yes");
  const [clientSecret, setClientSecret] = useState(false);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    // Clear the coupon code input after applying the coupon
    setCouponCode("");
  };

  const handleCart = async (event) => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      // Construct the items array based on selectedProducts
      const items = selectedProducts.map(({ productId, quantity }) => ({
        productId,
        quantity: parseInt(quantity) || 1, // Set quantity to 1 if not provided
      }));

      const registerData = { items }; // Create the payload

      const response = await fetch(`${API}cart/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error("cart failed");
      }

      const data = await response.json();
      localStorage.setItem("total_ca", data.total);

      console.log("cart applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        };

        const response = await fetch(`${API}cart/cart/summary`, {
          method: "GET", // Assuming you're fetching cart summary with a GET request
          headers: headers,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart summary");
        }

        const data = await response.json();
        setCartItems(data.items);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching cart summary:", error);
        window.location.href = "/pricedata";
      }
    };

    fetchData();
  }, []);

  const checkout = async () => {
    const registerData = {
      payInFull: selectedOption === "yes" ? true : false,
    };

    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const response = await fetch(`${API}cart/cart/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();

      // Assuming responseData contains the client secret
      const clientSecret = responseData.clientSecret;
      setClientSecret(clientSecret);

      console.log(clientSecret);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleSubmit = async () => {
    if (selectedOption === "") {
      return;
    }
  };

  const backButton = async () => {
    const selectedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const productIds = selectedProducts.map((item) => item.productId);
    const dataToSend = { productIds };

    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const response = await fetch(`${API}cart/cart/items`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("back failed");
      }

      const data = await response.json();
      localStorage.setItem("total_ca", data.total);
      window.location.href = "/months";

      console.log("back successful", data);
    } catch (error) {
      console.error("Error back", error);
    }
  };

  return (
    <>
      <div onClick={backButton}>
        <img
          src="img/back.png"
          alt="back"
          className="w-[60px] absolute top-[109px] left-0 cursor-pointer"
        />
      </div>
      <div className="bg-[#F6FAFD] flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Checkout
        </div>

        <div className="flex md:flex-row flex-col w-screen">
          <div className="flex md:w-[50%]">
            <div className="flex flex-col mt-12 items-start justify-start ml-12">
              <div className="flex">
                <label
                  className="flex bg-white px-4 py-3 rounded-md justify-center items-center cursor-pointer border-2 hover:border-green-600"
                  onClick={() => handleOptionClick("yes")}
                >
                  <input
                    type="radio"
                    name="country"
                    className="text-xl"
                    value="1"
                    checked={selectedOption === "yes"}
                  />
                  <p className="ml-2 font-Bree text-lg">pay full amount</p>
                </label>
                <label
                  className="flex bg-white px-4 py-3 rounded-md justify-center items-center ml-[20px] cursor-pointer border-2 hover:border-green-600"
                  onClick={() => handleOptionClick("no")}
                >
                  <input
                    type="radio"
                    name="country"
                    className="text-xl"
                    value="1"
                    checked={selectedOption === "no"}
                  />
                  <p className="ml-2 font-Bree text-xl">
                    Pay only 30% to reserve
                  </p>
                </label>
              </div>
              <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%]">
                • Pay Full Amount and get 5% Instant Discount.
              </div>
              <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] md:w-[60% w-[90%]">
                • Pay 30% to reserve your company.
              </div>
              <div className="flex font-Bree text-[#1D233B] text-md mt-[10px] md:w-[60% w-[90%]">
                • pay 50% after name confirmation
              </div>
              <div className="flex font-Bree text-[#1D233B] text-md mt-[10px] md:w-[60% w-[90%]">
                • Pay the remaining 20% after incorporation.
              </div>

              {clientSecret != "" && (
                <StripePaymentWidget clientSecret={clientSecret} />
              )}
            </div>
          </div>
          <div className="flex md:w-[50%]">
            <div className="flex flex-col mt-12 m-12 w-full p-4 rounded-2xl bg-white items-start justify-start ml-12">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex font-Bree text-[#1D233B] text-xl mt-[10px] w-full"
                >
                  <div className="flex flex-grow">{item.productName}</div>
                  <div className="flex">${item.price}</div>
                </div>
              ))}
              <div className="flex h-[1px] w-full bg-zinc-300 mt-[30px]"></div>
              <div className="bg-black rounded-md pr-4 mt-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  className="px-4 py-2 border-1 border-black rounded-md"
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button onClick={handleApplyCoupon} className="text-white ml-4">
                  Apply Coupon
                </button>
              </div>
              <div className="flex h-[1px] w-full bg-zinc-300 mt-[10px]"></div>
              {selectedOption === "yes" && (
                <div className="flex font-Bree text-[#1D233B] text-2xl mt-[10px] w-full">
                  <div className="flex flex-grow">Total</div>
                  <div className="flex">${total} CAD</div>
                </div>
              )}
              {selectedOption === "no" && (
                <div className="flex font-Bree text-[#1D233B] text-2xl mt-[10px] w-full">
                  <div className="flex flex-grow">Pay to Reserve</div>
                  <div className="flex">${(0.3 * total).toFixed(2)} CAD</div>
                </div>
              )}
              <div className="flex w-full justify-end items-end">
                <div
                  className="flex bg-[#33F28B] rounded-md p-2 px-4 md:w-[40%] mt-12 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
                  onClick={checkout}
                >
                  PAY NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
