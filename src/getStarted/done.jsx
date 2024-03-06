import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DonePayment = ({ clientSecret }) => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  const [paymentIntent, setPaymentIntent] = useState("");
  const [paymentIntentClientSecret, setPaymentIntentClientSecret] =
    useState("");
  const [redirectStatus, setRedirectStatus] = useState("");

  useEffect(() => {
    // Parse the query string from the URL
    const searchParams = new URLSearchParams(window.location.search);

    // Get the values from the query string
    const paymentIntentParam = searchParams.get("payment_intent");
    const paymentIntentClientSecretParam = searchParams.get(
      "payment_intent_client_secret"
    );
    const redirectStatusParam = searchParams.get("redirect_status");

    // Set the state with the extracted values
    setPaymentIntent(paymentIntentParam);
    setPaymentIntentClientSecret(paymentIntentClientSecretParam);
    setRedirectStatus(redirectStatusParam);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F6FAFD]">
      <div className="flex flex-col justify-center items-center">
        {redirectStatus != "succeeded" && (
          <img
            src="img/fail.png"
            alt="back"
            className="w-[100px] cursor-pointer mt-[50px]"
          />
        )}
        {redirectStatus === "succeeded" && (
          <img
            src="img/done.png"
            alt="back"
            className="w-[100px] cursor-pointer mt-[50px]"
          />
        )}

        <div
          className={`flex font-Bree font-semibold text-5xl mt-[10px] text-center ${
            redirectStatus === "succeeded" ? "text-[#0C9663]" : "text-[#D61717]"
          }`}
        >
          {redirectStatus === "succeeded"
            ? "Payment Successful!"
            : "Payment Failed!"}
        </div>
        <p className="ml-2 font-Bree text-xl mt-4">
          {redirectStatus === "succeeded"
            ? " you will receive an email from out team within 24 hours."
            : "An error occurred while processing your payment"}
        </p>
        <p className="ml-2 font-Bree text-md mt-1 text-zinc-400">
          Payment ID : {paymentIntent}
        </p>
        <p className="ml-2 font-Bree text-md mt-1 text-zinc-400">
          Payment Status : {redirectStatus}
        </p>

        <NavLink
          to={"/"}
          className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[300px] mt-12 mb-12 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
        >
          HOME
        </NavLink>
      </div>
    </div>
  );
};

export default DonePayment;
