import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components /header/Header';
import Qrcode from './pages/qrcode/Qrcode';
import Client from './pages/client/Client';
import ServicesFIZ from './pages/servises/FIZ'
import ServicesYUR from './pages/servises/YUR'
import Talon from './pages/talon/Talon';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<div><Header /><Client /></div>} />
          <Route path="/Qrcode" element={<div><Header /><Qrcode /></div>} />
          <Route path="/Services/FIZ" element={<div><Header /><ServicesFIZ /></div>} />
          <Route path="/Services/YUR" element={<div><Header /><ServicesYUR /></div>} />
          <Route path="/Talon" element={<div><Header /><Talon /></div>} />
        </Routes>
    </div>
  );
}

export default App;
