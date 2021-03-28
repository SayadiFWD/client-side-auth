import React, { useState, useEffect } from "react";
import api from "../utils/api";


const Account = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    api()
      .get("/me")
      .then((res) => {
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
