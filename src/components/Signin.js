import React, { useDebugValue, useState } from "react";
import api from "../utils/api"

import axios from "axios";



const Signin = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api()
      .post("/signin", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/account");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        type="email"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        id="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
export default Signin;



