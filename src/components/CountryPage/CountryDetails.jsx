import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

export default function CountryDetails() {
  const [country, setCountry] = useState();
  const { name } = useParams();

  useEffect(() => {
    singleCountry();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="background">
      <section>
        <div key={country.name.common}>
          <article className="flagdescription">
            <div className="imagesize">
              <img src={country.flags.svg} alt={country.name.common} />
            </div>
          </article>
          <article className="position">
            <h1>{country.name.official}</h1>
          </article>
        </div>
      </section>
    </div>
  );

  async function singleCountry() {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
}
