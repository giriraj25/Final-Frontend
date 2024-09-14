// CheckoutPage.js

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

// Stripe Promise
const stripePromise = loadStripe("your-public-stripe-key-here");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("No products in the cart");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Payment successful!", paymentMethod);
      clearCart(); // Clear the cart on success
      navigate("/thank-you"); // Redirect to thank you page
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No products in the cart</p>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img
                  className="checkout-item-img"
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${totalPrice}</h3>
          <div className="card-element">
            <CardElement />
          </div>
          <button type="submit" className="pay-btn" disabled={!stripe}>
            Pay ${totalPrice}
          </button>
        </>
      )}
    </form>
  );
};

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;
