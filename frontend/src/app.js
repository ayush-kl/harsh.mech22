import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Avatar from './components/Avatar';
import CoinWallet from './components/CoinWallet';
import FamilyGroup from './components/FamilyGroup';
import Offers from './components/Offers';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/coins" element={<CoinWallet />} />
        <Route path="/family-group" element={<FamilyGroup />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;