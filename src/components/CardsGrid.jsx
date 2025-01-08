import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import { CountriesContext } from "../context/CountriesContext";

function CardsGrid() {
  const { mode, filteredCountries } = useContext(CountriesContext);
  return (
    <div className="cards-container">
      {filteredCountries.length > 0 &&
        filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} mode={mode} />
        ))}
    </div>
  );
}

export default CardsGrid;
