import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";
import { FaShoppingCart } from "react-icons/fa"; // Importing a cart icon

const products = [
  {
    id: 1,
    name: "Electronics",
    image: "",
    price: 100,
  },
  {
    id: 2,
    name: "Fashion",
    image: "",
    price: 50,
  },
  {
    id: 3,
    name: "Home",
    image: "",
    price: 30,
  },
  {
    id: 4,
    name: "Sports",
    image: "",
    price: 80,
  },
];

function ProductList() {
  const { addToCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate(); // Hook for navigation

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <div className="product-list">
      {/* Cart summary */}
      <div className="cart-summary">
        <FaShoppingCart className="cart-icon" />
        <div>
          <h2>Cart</h2>
          <p>Items: {totalItems}</p>
          <p>Total: ${totalPrice}</p>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Product list */}
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <img
              className="product-img"
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
            />
            <p className="product-name-price">
              {product.name} - ${product.price}
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
