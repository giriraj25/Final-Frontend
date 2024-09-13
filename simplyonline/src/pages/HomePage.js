import React from "react";
import ProductList from "../components/ProductList";
import "./Homepage.css";
import { ImageAlbum } from "../components/ImageAlbum";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to SimplyBuyers</h1>
      <ImageAlbum />
      <ProductList />
    </div>
  );
}

export default HomePage;
