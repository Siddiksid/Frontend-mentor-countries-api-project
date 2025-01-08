import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountriesProvider } from "./context/CountriesContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </Router>
  </StrictMode>
);
