// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* Other components and content go here */}
    </div>
  );
}

export default App;
