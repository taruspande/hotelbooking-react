import React from "react";
import { Header as SearchPageHeader } from "./SearchPageHeader";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import FullCard from "./FullCard";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <>
      <div>
        <SearchPageHeader />
      </div>
      <div className="hotelBody">
        <div className="sideBar">
          <FilterSidebar />
        </div>
        <div className="mainBody">
          <SortBar />
          <FullCard />
          {/* <FullCard /> */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
