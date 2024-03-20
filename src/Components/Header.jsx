import React from 'react'
import './Header.css'
import { useState } from 'react';


function MyComponent({placeholder}) {
  const [inputType, setInputType] = useState('text');

  const handleFocus = () => {
    setInputType('date');
  };
  const handleBlur = (event) => {
    if (!event.target.value) {
      setInputType('text');
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
      <div>
        <h1>Find</h1>
        <h1>your perfect</h1>
        <h1>vacation stay with us</h1>
      </div>
      <div className='search'>
        <div id="search-bar">
          <input type="text" placeholder='Destination'/>
          <MyComponent placeholder={'Check in'}/>
          <MyComponent placeholder={'Check out'}/>

          <input type="text" placeholder='Rooms & People'/>
        </div>
        <button>Search</button>
      </div>
    </header>
    
    
  )
}
