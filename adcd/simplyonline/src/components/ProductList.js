import React from 'react';
// import { useCart } from '../context/CartContext';
import { useCart } from '../Context/CartContext';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: "Electronics",
    image: "./Test.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Fashion",
    image: "/images/Fashion.jpg",
    price: 50,
  },
  {
    id: 3,
    name: "Home",
    image: "/images/Home.jpg",
    price: 30,
  },
  {
    id: 4,
    name: "Sports",
    image: "/images/Sports.jpg",
    price: 80,
  },
];

function ProductList() {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, image: product.image },
    });
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
