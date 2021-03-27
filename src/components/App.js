import "./App.css";
import React from "react";
import { Link, Route } from "react-router-dom";
import Signin from "./Signin";
import Account from "./Account";
import Logout from "./Logout"
import ProtectedRoute from "./ProtectedRoute";
import getToken, { getTokne } from "../utils/api"


function App() {
  const SignIn = getTokne();
  return (
    <div className="wrapper">
      <nav>
        <Link to="/">Home</Link>
        {!Signin && <Link to="/signin">Sign In</Link>}
        {SignIn && <Link to="/account">My Account</Link>}
        {SignIn && <Link to="/logout">Log Out</Link>}
      </nav>
      <Route path="/signin" component={Signin} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/logout" component={Logout} />
      
    </div>
  );
}

export default App;
