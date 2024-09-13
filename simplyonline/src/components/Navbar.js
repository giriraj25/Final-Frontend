import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure to import the CSS file for styling

function Navbar() {
  return (
    <nav>
      <h2 className="name">SimplyBuyers</h2>
      <ul>
        <li className="text">
          <Link to="/">Home</Link>
        </li>
        <li className="text">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="text">
          <Link to="/products">Products</Link> {/* Added Cart link */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
