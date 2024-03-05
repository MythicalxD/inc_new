import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51J6TOJDyOVzZxe5dtOFHL6ztQAk8YtSJCnxjA1lMsnCrNtcppzC5xPe9il5PTKfWaGP2gVsv5rUlPtk43tjuqJEN00ySurYRd7"
);

const StripePaymentWidget = ({ clientSecret }) => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "pi_3OqwpFDyOVzZxe5d0vNIpr0V_secret_48cIEGIAP3PoXfMNSZUtJPHaM",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <form className="w-full bg-white rounded-lg shadow-md mt-8 mb-8 p-4">
        <PaymentElement />
        <button
          type="submit"
          className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[40%] mt-4 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
        >
          Submit
        </button>
      </form>
    </Elements>
  );
};

export default StripePaymentWidget;
