import "../index.css";
function Card({ country }) {
  return (
    <div className="col-lg-3 col-md-4 mb-5">
      <img
        src={country.flags.png}
        className="card-img-top img-size rounded-top"
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="card-body rounded-bottom shadow p-3">
        <h3>{country.translations.fra.common}</h3>

        <h4>
          <span className="font-medium">Population: </span>{" "}
          {country.population.toLocaleString()}
        </h4>

        <h4>
          <span className="font-medium">Region :</span> {country.region}
        </h4>

        <h4>
          <span className="font-medium">Capital :</span> {country.capital}
        </h4>
      </div>
    </div>
  );
}

export default Card;
