import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({});

export const CountriesProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  async function fetchCountries() {
    try {
      // Check if data exists in localStorage
      const localData = localStorage.getItem("countryData");

      if (localData) {
        const parsedData = JSON.parse(localData);
        setCountries(parsedData);
        setFilteredCountries(parsedData);
      } else {
        // Fetch data from the API if not found in localStorage
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
        setFilteredCountries(data);

        // Store the data in localStorage
        localStorage.setItem("countryData", JSON.stringify(data));
      }
    } catch (error) {
      console.log("Error fetching countries:", error);
    }
  }
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <CountriesContext.Provider
      value={{
        mode,
        setMode,
        countries,
        setCountries,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
