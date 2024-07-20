import React from "react";
import "./Countries.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const data = [];
const url = "https://restcountries.com/v3.1/all?fields=name,flags";

export default function Countries() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorText, setErrorText] = useState();

  const fetchData = async () => {
    const targetUrl =
      searchText === ""
        ? url
        : `https://restcountries.com/v3.1/name/${searchText}?fields=name,flags`;

    const response = await axios
      .get(targetUrl)
      .catch((error) => setErrorText(error.message));

    setCountries(response?.data ?? []);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div className="country_container">
      <Helmet>
        <title>Countries Page</title>
      </Helmet>
      <header>
        <h1>Countries Information</h1>
        <div>
          <input
            className="search"
            type="search"
            name="search"
            id="search"
            onChange={handleChange}
            placeholder="Search for country..."
          ></input>
        </div>
      </header>
      <main className="content">
        <br />
        <div>
          <section className="grid">
            {countries.map((country) => {
              const { flags, name } = country;

              return (
                <article
                  key={name.common}
                  onClick={() => handleClick(name.common)}
                >
                  <div>
                    <img className="flag" src={flags.png} alt={flags.alt}></img>
                    <h3>{name.common}</h3>
                    <h4>
                      Official Name: <span>{name.official}</span>
                    </h4>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
  function handleClick(CountryName) {
    navigate("/countrydetails?target=" + CountryName);
  }
}
