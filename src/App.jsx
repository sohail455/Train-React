import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Tours from "./pages/Tours";
import Career from "./pages/career";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [tours, setTours] = useState([]);
  useEffect(function () {
    async function getTours() {
      try {
        const res = await fetch("http://localhost:3000/trips");
        const data = await res.json();
        setTours(data);
      } catch {
        alert("error in getting data..");
      }
    }
    getTours();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="tours" element={<Tours tours={tours} />} />
          <Route path="Career" element={<Career />} />
          <Route path="login" element={<Login />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
