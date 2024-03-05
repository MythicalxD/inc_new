import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51J6TOJDyOVzZxe5dtOFHL6ztQAk8YtSJCnxjA1lMsnCrNtcppzC5xPe9il5PTKfWaGP2gVsv5rUlPtk43tjuqJEN00ySurYRd7"
);

const StripePaymentWidget = ({ clientSecret }) => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePaymentWidget;
