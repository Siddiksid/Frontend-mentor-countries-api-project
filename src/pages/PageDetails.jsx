// import React, { useContext } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { CountriesContext } from "../context/CountriesContext";

// function PageDetails() {
//   const { mode } = useContext(CountriesContext);

//   const { name } = useParams();
//   const storedCountries = localStorage.getItem("countryData");
//   const countries = storedCountries ? JSON.parse(storedCountries) : [];
//   const countryData =
//     countries.length > 0 &&
//     countries.find(
//       (country) => country?.cca3.toLowerCase() === name.toLowerCase()
//     );

//   if (!countryData) {
//     return (
//       <div className="country-details">
//         <NavLink className={`btn`} to={"/"}>
//           <i className="fa-solid fa-arrow-left"></i> <span>Back</span>
//         </NavLink>
//         <p>Country not found.</p>
//       </div>
//     );
//   }

//   const currencyKey = countryData?.currencies
//     ? Object.keys(countryData.currencies)[0]
//     : "";
//   const currencyName = countryData?.currencies?.[currencyKey]?.name || "";
//   const languages = countryData?.languages
//     ? Object.values(countryData.languages).join(",")
//     : "";
//   const borders = countryData?.borders || [];

//   const borderNames = borders?.map((borderCode) => {
//     const borderCountry =
//       countries.length > 0 &&
//       countries.find(
//         (country) => country.cca3.toLowerCase() === borderCode.toLowerCase()
//       );
//     return borderCountry?.name?.common || "Unknown";
//   });

//   return (
//     <div className="country-details">
//       <NavLink className={`btn`} to={"/"}>
//         <i className="fa-solid fa-arrow-left"></i> <span>Back</span>
//       </NavLink>

//       <div className="country-details-box">
//         <div className="left">
//           <img src={countryData?.flags.svg} alt="flag-image" />
//         </div>
//         <div className="right">
//           <h2>{countryData?.name?.common}</h2>
//           <div className="text-details">
//             <div className="text-detail-left">
//               <p>Native Name: {countryData?.name?.nativeName?.prs?.common}</p>
//               <p>Population: {countryData?.population}</p>
//               <p>Region: {countryData?.region}</p>
//               <p>Sub Region: {countryData?.subregion}</p>
//               <p>Capital: {countryData?.capital?.join(", ") || "N/A"}</p>
//             </div>
//             <div className="text-detail-right">
//               <p>Top Level Domain: {countryData?.tld?.join(", ") || "N/A"}</p>
//               <p>Currencies: {currencyName}</p>
//               <p>Languages: {languages}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PageDetails;
import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";

function PageDetails() {
  const { mode } = useContext(CountriesContext);

  const { name } = useParams();
  const storedCountries = localStorage.getItem("countryData");
  const countries = storedCountries ? JSON.parse(storedCountries) : [];
  const countryData =
    countries.length > 0 &&
    countries.find(
      (country) => country?.cca3.toLowerCase() === name.toLowerCase()
    );

  if (!countryData) {
    return (
      <div className="country-details">
        <NavLink className={`btn`} to={"/"}>
          <i className="fa-solid fa-arrow-left"></i> <span>Back</span>
        </NavLink>
        <p>Country not found.</p>
      </div>
    );
  }

  const currencyKey = countryData?.currencies
    ? Object.keys(countryData.currencies)[0]
    : "";
  const currencyName = countryData?.currencies?.[currencyKey]?.name || "";
  const languages = countryData?.languages
    ? Object.values(countryData.languages).join(",")
    : "";
  const borders = countryData?.borders || [];

  const borderNames = borders?.map((borderCode) => {
    const borderCountry =
      countries.length > 0 &&
      countries.find(
        (country) => country.cca3.toLowerCase() === borderCode.toLowerCase()
      );
    return borderCountry?.name?.common || "Unknown";
  });

  return (
    <div className="country-details">
      <NavLink className={`btn`} to={"/"}>
        <i className="fa-solid fa-arrow-left"></i> <span>Back</span>
      </NavLink>

      <div className="country-details-box">
        <div className="left">
          <img src={countryData?.flags.svg} alt="flag-image" />
        </div>
        <div className="right">
          <h2>{countryData?.name?.common}</h2>
          <div className="text-details">
            <div className="text-detail-left">
              <p>
                <strong>Native Name:</strong>{" "}
                {countryData?.name?.nativeName?.prs?.common}
              </p>
              <p>
                <strong>Population:</strong> {countryData?.population}
              </p>
              <p>
                <strong>Region:</strong> {countryData?.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {countryData?.subregion}
              </p>
              <p>
                <strong>Capital:</strong>{" "}
                {countryData?.capital?.join(", ") || "N/A"}
              </p>
            </div>
            <div className="text-detail-right">
              <p>
                <strong>Top Level Domain:</strong>{" "}
                {countryData?.tld?.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong> {currencyName}
              </p>
              <p>
                <strong>Languages:</strong> {languages}
              </p>
            </div>
          </div>
          <strong style={{ display: "block", marginBottom: "20px" }}>
            Border Countries:{borderNames.length === 0 && " None"}
          </strong>
          <div className="border-countries">
            {borderNames.length > 0 &&
              borderNames.map((country, index) => {
                return (
                  <span className="border-btn" key={index}>
                    {country}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDetails;
