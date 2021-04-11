import React, { useState, useEffect } from "react";
import api from "../utils/api";
// import api from "../utils/api";

const Account = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    api()
      .get("/me")
      .then((res) => {
        console.log(res);
        setUser({
          name: res.data.name,
          email: res.data.email,
        });
      });
  }, []);
  return (
    <div>
      <div className="account-row">Name:{user.name}</div>
      <div className="account-row">Email:{user.email}</div>
    </div>
  );
};

export default Account;

