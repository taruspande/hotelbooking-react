import React from 'react';
import  './Header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function MyComponent({ placeholder }) {
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
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const [destination, setDestination] = useState('');
  

  const handleSearchClick = (event) => {
    event.preventDefault();
    // Redirect to the search page with the search parameters in the URL
    navigate(`/search-page?destination=${destination}`);
  };



  return (
    <div className="header-1">

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
      <div >
      <div className="SortBar">
        <div className="SortBar2">
          <form >
          <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='Destination' />
          
          </form>
          
        </div>
        <button type="submit" className="submitBtn" onClick={handleSearchClick} >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        
      </div>
        
      </div>


      



    </header>
    </div>
  );
};

export default Header;
