import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

function Navbar() {
  const { mode, setMode } = useContext(CountriesContext);
  return (
    <nav className={`nav ${mode === "dark" ? "nav-dark" : ""}`}>
      <div className="nav-text">
        <h1>Where in the world?</h1>
      </div>
      <div
        className="toggle-theme"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        <p>
          {mode === "dark" ? (
            <i className="fa-solid fa-toggle-off"></i>
          ) : (
            <i className="fa-solid fa-toggle-on"></i>
          )}
        </p>
        <p>{mode === "dark" ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </nav>
  );
}

export default Navbar;
