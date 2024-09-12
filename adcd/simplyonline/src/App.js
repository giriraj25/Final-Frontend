import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
//import HomePage from './pages/Homepage';
import HomePage from './pages/HomePage';
import ProductDetail from './components/ProductDetail';
import SignIn from './components/SignIn';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPages';
import ThankYouPage from './pages/ThankYouPage';
import './App.css';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    //<CartProvider>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/checkout" element={<CheckoutPage />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/thank-you" element={<ThankYouPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
 <h1>hello world</h1>)
}


export default App;
