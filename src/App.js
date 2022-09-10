import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Weather from "./pages/Weather.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Weather city="ottawa" />}></Route>
      <Route path="/moscow" element={<Weather city="moscow"/>}></Route>
      <Route path="/tokyo" element={<Weather city="tokyo"/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
