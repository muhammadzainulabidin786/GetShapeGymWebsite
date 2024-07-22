// src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ClassesServices from "./components/Classes&Services";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import "./App.css";
import Membership from "./components/Membership";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ClassesServices />
      <Membership />
      <Shop />
      {/* Other components and content go here */}
    </div>
  );
}

export default App;
