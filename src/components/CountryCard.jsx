import React from "react";
import { useNavigate } from "react-router-dom";

function CountryCard({ mode, country }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/country/${country?.cca3}`);
  };

  return (
    <div
      className="card-component"
      style={{
        backgroundColor: mode === "dark" ? "#2B3945" : "#fff",
      }}
      onClick={handleCardClick} // Correct usage
    >
      <img src={country?.flags.png} alt={`${country?.name?.common} flag`} />
      <div className="details">
        <h3>{country?.name?.common}</h3>
        <p>
          <span>Population: </span>
          {country?.population.toLocaleString()} {/* Format population */}
        </p>
        <p>
          <span>Region:</span> {country?.region}
        </p>
        <p>
          <span>Capital: </span>
          {country?.capital?.join(", ") || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
