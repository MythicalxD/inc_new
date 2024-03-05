import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://incpass.ca/done",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form
      className="w-full bg-white rounded-lg shadow-md mt-8 mb-8 p-4"
      onSubmit={handleSubmit}
    >
      <PaymentElement />

      <button
        type="submit"
        disabled={!stripe}
        className="flex bg-[#33F28B] rounded-md p-2 px-4 w-[40%] mt-4 text-center justify-center items-center font-Bree text-[#1D233B] cursor-pointer hover:bg-[#40c47e]"
      >
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
