import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import More from './components/More';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/more" element={<More />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
