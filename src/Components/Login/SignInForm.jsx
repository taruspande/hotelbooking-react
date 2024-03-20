import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "../axios";
import "./SignInUp.css";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
  ]);
  if (cookies.access_token) {
    window.location.href = "/";
  }
  if (cookies.refresh_token) {
    axios
      .post("api/user/login/refresh/", { refresh: cookies.refresh_token })
      .then((res) => {
        if (res.data.status === 200) {
          access_expire = new Date();
          access_expire.setTime(access_expire.getTime() + 300000);
          refresh_expire = new Date();
          refresh_expire.setTime(refresh_expire.getTime() + 1296000000);
          setCookie("access_token", res.data.access, {
            path: "/",
            expires: access_expire,
          });
          setCookie("refresh_token", res.data.refresh, {
            path: "/",
            expires: refresh_expire,
          });
          window.location.href = "/";
        } else {
          removeCookie("refresh_token");
        }
      });
  }

  function handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("api/user/login/", { username: email, password: password })
      .then((res) => {
        if (res.data.status === 200) {
          access_expire = new Date();
          access_expire.setTime(access_expire.getTime() + 5 * 60 * 1000);
          refresh_expire = new Date();
          refresh_expire.setTime(
            refresh_expire.getTime() + 15 * 24 * 60 * 60 * 1000
          );
          setCookie("access_token", res.data.access_token, {
            path: "/",
            expires: access_expire,
          });
          setCookie("refresh_token", res.data.refresh_token, {
            path: "/",
            expires: refresh_expire,
          });
          window.location.href = "/";
        }
        if (res.data.status === 401) {
          alert("Invalid username or password");
        }
      });
  }

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={this.handleSubmit}>
        <div className="formField">
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          {/* <label className="formFieldLabel" htmlFor="password">
              Password
            </label> */}
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" onClick={handleSubmit}>
            SIGN IN
          </button>{" "}
          <Link to="/signup" className="formFieldLink">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
