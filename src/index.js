import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './pages/map/map.jsx';
import Addmap from './pages/map/addMap.jsx';
import Tast from './pages/tast/tast.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<App />} />
      {/* <Route path="map" element={<Map />} >
        <Route path="map/addmap" element={<Addmap />} />
      </Route> */}
      <Route path="map" element={<Map />} />
      <Route path="addmap" element={<Addmap />} />
      <Route path="tast" element={<Tast />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
