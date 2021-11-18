import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './pages/map/map.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);