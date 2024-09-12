import React from 'react';
import ImageAlbum from '../components/ImageAlbum';
import ProductList from '../components/ProductList';
import './Homepage.css';

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
