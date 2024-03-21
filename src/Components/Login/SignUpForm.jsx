import React, { useState } from "react";
import axios from "../../axios";
import "./SignInUp.css";

function SignUpForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [hasAgreed, setHasAgreed] = useState(false);

  function handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      case "hasAgreed":
        setHasAgreed(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post("api/user/register/", {
        username: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      })
      .then((res) => {
        window.location.href = "/signin";
      })
      .catch((res) => {
        if (res.response.data.message.length > 0) {
          alert("A member with this email already exists");
          setEmail("");
        } else {
          alert("Please fill all the fields");
        }
      });
  }

  return (
    <div className="App">
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
          <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
              <div className="formField1">
                <input
                  type="text"
                  id="firstname"
                  className="formFieldInput"
                  placeholder="First name"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="formField1">
                <input
                  type="text"
                  id="lastname"
                  className="formFieldInput"
                  placeholder="Last name"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="formField1">
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
              <div className="formField1">
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="formField1">
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </div>
              <div className="formField1">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={hasAgreed}
                    onChange={handleChange}
                  />{" "}
                  I agree all statements in{" "}
                  <a href="/tos" className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>

              <div className="formField1">
                <button className="formFieldButton">SIGN UP</button>{" "}
                <a href="/signin" className="formFieldLink">
                  I'm already a member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
