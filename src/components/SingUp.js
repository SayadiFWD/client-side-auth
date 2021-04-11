import React, { useState } from "react";
import axios from "axios";
import Signin from "./Signin";


const SignUp = (props) => {
  const [data, setData] = useState({
    name: "",
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
    axios.post("http://localhost:8080/signup", data)
    .then(res =>{
      localStorage.setItem("token",res.data.tokent)
      setData({name:"",email:"",password:""})
   
      


    })
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default SignUp;
