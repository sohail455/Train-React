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
import ResetPassword from "./pages/ResetPassword";
import ConfirmEmail from "./pages/ConfirmEmail";

function App() {
  const [tours, setTours] = useState([]);
  useEffect(function () {
    async function getTours() {
      try {
        const res = await fetch("http://localhost:800/api/v1/tours", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }

        );
        const data = await res.json();
        setTours(data.data);
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
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="signIn/confirmation" element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
