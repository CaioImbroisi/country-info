import React from "react";
import Header from "./common/ui/Header.jsx"
import SearchCountries from "./common/ui/components/SearchCountries.tsx"
import Footer from "./common/ui/Footer.jsx"
import Home from "./pages/Home.tsx"
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
