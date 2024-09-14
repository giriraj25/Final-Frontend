import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      // Redirect or show success message
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={onSubmit}>
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Show error message */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="signin-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
