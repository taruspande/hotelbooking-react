import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField1">
            <input
              type="text"
              id="firstname"
              className="formFieldInput"
              placeholder="First name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              id="lastname"
              className="formFieldInput"
              placeholder="Last name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Confirm Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField1">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField1">
            <button className="formFieldButton">SIGN UP</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
