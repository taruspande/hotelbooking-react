import React from "react";
import "./SortBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortBar = ({ handleInputChange, query }) => {
  return (
    <div className="SortBar">
      <div className="SortBar2">
        <form>
          <input
            type="text"
            placeholder="  Search By Hotel Name"
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <button type="submit" className="submitBtn" >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SortBar;
