import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, dispatch } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
