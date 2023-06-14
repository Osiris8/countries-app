import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
  const countrieArray = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="row p-3">
        <div className="flex justify-between">
          <div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for country"
              />
            </label>
          </div>
          {selectedContinent && (
            <button
              onClick={() => setSelectedContinent("")}
              type="button"
              className="btn btn-info"
            >
              Annuler le filtre
            </button>
          )}

          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-customize"
              type="button"
              data-bs-toggle="dropdown"
            >
              Filter by Region
            </button>
            <ul className="dropdown-menu">
              {countrieArray.map((continent, index) => (
                <li key={index}>
                  <button
                    value={continent}
                    onClick={(e) => setSelectedContinent(e.target.value)}
                    className="dropdown-item"
                    type="button"
                  >
                    {continent}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        {search
          ? data
              .filter((country) =>
                country.translations.fra.common.includes(search)
              )

              .map((country, index) => <Card key={index} country={country} />)
          : data
              .filter((country) =>
                country.continents[0].includes(selectedContinent)
              )

              .map((country, index) => <Card key={index} country={country} />)}
      </div>
    </div>
  );
}
export default Countries;
