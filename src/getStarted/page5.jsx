import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../tail.css";
import { useProductContext } from "../utils/productContext";
import { API } from "../utils/constants";
import StripePaymentWidget from "./payment";

function Book() {
  const [quantity, setQuantity] = useState(0);
  const [discount, setDiscount] = useState(0);

  const incrementQuantity = (id, qty) => {
    if (qty <= 4) {
      handleUpdate(id, qty + 1);
    }
  };

  const decrementQuantity = (id, qty) => {
    if (qty > 0) {
      handleUpdate(id, qty - 1);
    }
  };

  const [selectedOption, setSelectedOption] = useState("yes");
  const [clientSecret, setClientSecret] = useState(false);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const [couponCode, setCouponCode] = useState("");

  const handleDiscount = async () => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      // Construct the items array based on selectedProducts
      const requestData = {
        discountCode: couponCode,
      };

      const response = await fetch(`${API}cart/cart/discount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("cart failed");
      }

      const data = await response.json();
      setDiscount(total - data.discountedTotal);
      setTotal(data.discountedTotal);

      console.log("cart applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

  const handleUpdate = async (id, qty) => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      // Construct the items array based on selectedProducts
      const requestData = {
        productId: id,
        quantity: qty,
      };

      const response = await fetch(`${API}cart/cart/updateqty`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("cart failed");
      }

      const data = await response.json();
      fetchData();

      console.log("cart applied successful", data);
    } catch (error) {
      console.error("Error OTP", error);
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  const checkout = async () => {
    let registerData;
    if (couponCode === "") {
      registerData = {
        payInFull: selectedOption === "yes" ? true : false,
      };
    } else {
      registerData = {
        payInFull: selectedOption === "yes" ? true : false,
        discountCode: couponCode,
      };
    }

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

  const upgardeRush = async () => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const response = await fetch(`${API}cart/cart/upgrade`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      fetchData();

      console.log(clientSecret);
    } catch (error) {
      console.error("Error during checkout:", error);
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
      localStorage.setItem("selectedProducts", JSON.stringify([]));
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
      <div className="bg-[#F6FAFD] min-h-screen flex flex-col items-center">
        <div className="flex font-Bree text-[#0C9663] font-semibold text-3xl mt-[50px] text-center">
          Checkout
        </div>

        <div className="flex md:flex-row flex-col w-screen">
          <div className="flex md:w-[50%]">
            <div className="flex flex-col mt-12 md:items-start md:justify-start md:ml-12 md:p-0 p-4 ">
              <div className="flex md:flex-row flex-col">
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
                  className="flex bg-white px-4 py-3 rounded-md justify-center items-center md:ml-[20px] cursor-pointer border-2 hover:border-green-600"
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
              <div className="flex flex-col pl-8 pt-4">
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
              </div>

              {clientSecret != "" && (
                <StripePaymentWidget clientSecret={clientSecret} />
              )}
            </div>
          </div>
          <div className="flex md:w-[50%]">
            <div className="flex flex-col mt-12 md:m-12 w-full p-4 rounded-2xl bg-white items-start justify-start md:ml-12 m-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col gap-x-2 gap-y-2 md:mt-[10px] mt-[20px] font-Bree text-[#1D233B] text-xl w-full"
                >
                  <div className="flex">{item.productName}</div>

                  {["12", "13", "19", "20"].includes(item.productId) && (
                    <div className="flex w-[80px] justify-center items-center md:ms-4 border-1 border-black rounded px-2 ">
                      <div style={{ display: "flex ", alignItems: "center" }}>
                        <button
                          onClick={() =>
                            decrementQuantity(item.productId, item.quantity)
                          }
                        >
                          -
                        </button>
                        <div style={{ width: "30px", textAlign: "center" }}>
                          {item.quantity}
                        </div>
                        <button
                          onClick={() =>
                            incrementQuantity(item.productId, item.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                  {["1"].includes(item.productId) && (
                    <div
                      onClick={upgardeRush}
                      className="mt-0 py-1 px-2 text-xs bg-gray-100 hover:bg-gray-200 border-[2px] border-gray-700 rounded-md flex justify-center items-center"
                    >
                      <button className="text-zinc-600 w-[200px]">
                        Upgrade to Rush Incorporation
                      </button>
                    </div>
                  )}
                  <div className="flex flex-grow"></div>
                  <div className="flex md:mt-0 mt-[-10px]">${item.price}</div>
                </div>
              ))}

              <div className="flex h-[1px] w-full bg-zinc-300 mt-[30px]"></div>
              <div className="flex flex-row bg-black rounded-md pr-4 mt-2 w-full">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  className="px-4 py-2 border-1 border-black rounded-md w-full"
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  onClick={handleDiscount}
                  className="text-white ml-4 w-[100px]"
                >
                  Apply
                </button>
              </div>
              <div className="flex h-[1px] w-full bg-zinc-300 mt-[10px]"></div>

              <div className="flex flex-col w-full mt-[20px]">
                {discount != 0 && (
                  <div className="flex font-Bree text-[#1D233B] text-xl w-full">
                    <div className="flex flex-grow">Discount Coupon</div>
                    <div className="flex text-green-500">
                      -${discount.toFixed(2)}
                    </div>
                  </div>
                )}

                {selectedOption === "yes" && (
                  <div className="flex flex-col font-Bree text-[#1D233B] text-2xl w-full">
                    <div className="flex font-Bree text-[#1D233B] text-xl mt-[10px] w-full">
                      <div className="flex flex-grow">Discount (5%)</div>
                      <div className="flex text-green-500">
                        -${(0.05 * total).toFixed(2)}
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <div className="flex flex-grow text-3xl">Total</div>
                      <div className="flex">${total - 0.05 * total} CAD</div>
                    </div>
                  </div>
                )}
              </div>

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
