import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Countries from "./CountryPage/Countries";

function CountryRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/countries" element={<Countries />} />
    </Routes>
  );
}

export default CountryRouter;
