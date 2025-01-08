import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { CountriesContext } from "./context/CountriesContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageDetails from "./pages/PageDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<PageDetails />} />
      </Routes>
    </>
  );
}

export default App;
