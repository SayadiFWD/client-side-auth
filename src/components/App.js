import "./App.css";
import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Signin from "./Signin";
import Account from "./Account";
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";
import { getToken } from "../utils/api";

function App() {
  const SignIn = getToken();
  return (
    <div className="wrapper">
      <nav>
        <Link to="/">Home</Link>
        {!SignIn && <Link to="/sign">Sign In</Link>}
        {SignIn && <Link to="/account">My Account</Link>}
        {SignIn && <Link to="/logout">Log Out</Link>}
      </nav>
      <Route exact path="/sign" component={Signin} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
