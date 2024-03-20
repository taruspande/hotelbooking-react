import React from "react";
import "./SearchPageHeader.css";
import { useState } from "react";

function MyComponent({ placeholder }) {
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };
  const handleBlur = (event) => {
    if (!event.target.value) {
      setInputType("text");
    }
  };
  return (
    <input
      type={inputType}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  );
}

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>

      <div className="search">
        <div id="search-bar">
          <input type="text" placeholder="Destination" />
          <MyComponent placeholder={"Check in"} />
          <MyComponent placeholder={"Check out"} />

          <input type="text" placeholder="Rooms & People" />
          <button>SEARCH</button>
        </div>
      </div>
    </header>
  );
};
