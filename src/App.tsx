import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ShopDetails from './pages/ShopDetails';
import CustomOrder from './pages/CustomOrder';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<ShopDetails />} />
          <Route path="/custom-order" element={<CustomOrder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;