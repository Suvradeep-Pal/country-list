import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Countries from "./CountryPage/Countries";
import CountryDetails from "./CountryPage/CountryDetails";

function CountryRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/countrydetails" element={<CountryDetails />} />
    </Routes>
  );
}

export default CountryRouter;
