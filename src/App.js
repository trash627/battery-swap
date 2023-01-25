import Header from "./components/header/Header"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home";
import fire from "./config/fire";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  )
}
