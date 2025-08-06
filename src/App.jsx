import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Tours from "./pages/Tours";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="tours" element={<Tours />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
