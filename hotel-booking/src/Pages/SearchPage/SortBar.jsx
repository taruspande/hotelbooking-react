import React, { useState } from "react";
import "./SortBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const SortBar = () => {
  const [searchHotel, setSearchHotel] = useState("");

  const handleInputChange = (event) => {
    setSearchHotel(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform the search using the searchTerm
    // This will depend on how you're fetching your data
  };
  return (
    <div className="SortBar">
      <div className="SortBarCompo">
        <span className="Sort">Sort:</span>
        <span className="SortBarEle">Popular</span>
        <span className="SortBarEle">User Rating</span>
        <span className="SortBarEle">
          Pricing<span>(Lowest First)</span>
        </span>
        <span className="SortBarEle">
          Pricing<span>(Highest First)</span>
        </span>
      </div>
      <div className="SortBar2">
        {" "}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="  Search By Hotel Name"
            value={searchHotel}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <button type="submit" className="submitBtn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SortBar;
