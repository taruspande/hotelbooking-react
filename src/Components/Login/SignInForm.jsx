import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../../axios";
import "./SignInUp.css";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies(["access", "refresh"]);
  if (cookies.access) {
    window.location.href = "/";
  } else if (cookies.refresh) {
    axios
      .post("api/user/login/refresh/", { refresh: cookies.refresh })
      .then((res) => {
        let access_expire = new Date();
        access_expire.setTime(access_expire.getTime() + 300000);
        let refresh_expire = new Date();
        refresh_expire.setTime(refresh_expire.getTime() + 1296000000);
        setCookie("refresh", res.data.refresh, {
          path: "/",
          expires: refresh_expire,
          sameSite: "strict",
        });
        setCookie("access", res.data.access, {
          path: "/",
          expires: access_expire,
        });
        window.location.href = "/";
      })
      .catch((res) => {
        removeCookie("refresh");
      });
  }

  function handleChange(e) {
    let target = e.target;
    let value = target.value;
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
        let access_expire = new Date();
        access_expire.setTime(access_expire.getTime() + 5 * 60 * 1000);
        let refresh_expire = new Date();
        refresh_expire.setTime(
          refresh_expire.getTime() + 15 * 24 * 60 * 60 * 1000
        );
        setCookie("refresh", res.data.refresh, {
          path: "/",
          expires: refresh_expire,
          sameSite: "strict",
        });
        setCookie("access", res.data.access, {
          path: "/",
          expires: access_expire,
          sameSite: "strict",
        });
        window.location.href = "/";
      })
      .catch((res) => {
        if (res.response.status === 401) {
          alert("Invalid username or password");
        }
      });
  }

  return (
    <div className="App1">
      <div className="appAside" />
      <div className="appForm">
        <div className="formTitle">
          <a
            href="/signin"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign In
          </a>{" "}
          |{" "}
          <a
            href="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </a>
        </div>
        <form className="formCenter" onSubmit={handleSubmit}>
          <div className="formField">
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Email"
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
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" onClick={handleSubmit}>
              SIGN IN
            </button>
          </div>
          <a href="/signup" className="formFieldLink">
            Create an account
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
