import React, { useContext } from "react";

import Search from "../components/Search";
import CountryCard from "../components/CountryCard";
import CardsGrid from "../components/CardsGrid";
import { CountriesContext } from "../context/CountriesContext";

function Home() {
  const { mode, setMode, filteredCountries } = useContext(CountriesContext);
  return (
    <div>
      <Search />
      <CardsGrid />
    </div>
  );
}

export default Home;
