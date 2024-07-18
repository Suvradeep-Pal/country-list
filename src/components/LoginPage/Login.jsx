import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    password: "",
  });

  const [errorText, setErrorText] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <br />
          {errorText && <div className="errorColor">{errorText}</div>}
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Username"
              required
              onChange={handleChange}
            ></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            ></input>
            <FaLock className="icon" />
          </div>
          <button type="submit" onClick={handleLogin} className="login">
            Login
          </button>
        </form>
      </div>
    </div>
  );

  function handleLogin() {
    if (details.name === "admin" && details.password === "123") {
      setErrorText(undefined);
      navigate("/countries");
    } else {
      setErrorText("Invalid username or password!");
    }
  }
};

export default Login;
