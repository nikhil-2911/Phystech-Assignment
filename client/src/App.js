import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
