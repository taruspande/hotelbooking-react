import React, { Component } from "react";
import { Routes } from "react-router-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./components/SignUpform";
import SignInForm from "./components/SignInform";

// import "./signin.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/" element={<App />}>
        <div className="App">
          <div className="App1">
            <div className="appAside" />
            <div className="appForm">
              {/* <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div> */}

              <div className="formTitle">
                <NavLink
                  to="/sign-in"
                  activeClassName="formTitleLink-active"
                  className="formTitleLink"
                >
                  Sign In
                </NavLink>{" "}
                |{" "}
                <NavLink
                  exact
                  to="/"
                  activeClassName="formTitleLink-active"
                  className="formTitleLink"
                >
                  Sign Up
                </NavLink>
              </div>
              <Routes>
                <Route exact path="/" element={<SignUpForm />} />
                <Route path="/sign-in" element={<SignInForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
