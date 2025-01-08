import React, { useState, useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

function Search() {
  const regions = [
    "Antarctic",
    "Americas",
    "Europe",
    "Africa",
    "Asia",
    "Oceania",
  ];
  const { mode, countries, filteredCountries, setFilteredCountries } =
    useContext(CountriesContext);
  const [input, setInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  return (
    <div className="search-options">
      <div
        className="search-body"
        style={{
          backgroundColor: mode === "dark" ? "#2B3945" : "#fff",
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          style={{ color: mode === "dark" ? "#fff" : "#000" }}
          type="text"
          className="search-input"
          placeholder="Search for a country..."
          value={input}
          onChange={(e) => {
            const searchInput = e.target.value;
            setInput(searchInput);

            // Filter countries based on both input and region filter
            let filteredCountries = countries.filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            );
            console.log("filteredCountries", filteredCountries);

            // Apply region filter if a region is selected
            if (regionFilter !== "all") {
              filteredCountries = filteredCountries.filter(
                (country) => country.region === regionFilter
              );
            }

            setFilteredCountries(filteredCountries);
          }}
        />
      </div>

      <select
        name="region"
        id=""
        value={regionFilter}
        onChange={(e) => {
          const selectedRegion = e.target.value;
          setRegionFilter(selectedRegion);
          let filteredCountries = countries.filter((country) => {
            if (selectedRegion === "all") {
              return true;
            } else {
              return country.region === selectedRegion;
            }
          });
          setFilteredCountries(filteredCountries);
        }}
      >
        <option value="all">All</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Search;
