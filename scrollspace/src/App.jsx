import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import MyLibrary from './pages/MyLibrary'; 
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />

        <Route
        path="/my-library"
        element={<ProtectedRoute element={<MyLibrary />} />}
        
      />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;