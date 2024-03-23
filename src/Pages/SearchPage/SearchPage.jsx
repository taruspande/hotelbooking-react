import React, { useState, useEffect } from "react";
import { Header as SearchPageHeader } from "./SearchPageHeader";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import FullCard from "./FullCard";
import "./SearchPage.css";
import FullData from "./FullData";
import axios from "../../../src/axios"

const SearchPage = () => {
  // const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  //FilterSideBar
  const [filters, setFilters] = useState({});

  //SortBar
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const [products, setProducts] = useState([]);

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const getMyPostData = async () => {
    try {
      const res = await axios.get("api/hotels/list/");
      setProducts(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  function filteredData(products, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    return filteredProducts.map(
      ({
        name,
        hotel_id,
        city,
        stars,
        average_price,
        pool,
        spa,
        gym,
        restaurant,
        laundry,
      }) => (
        <FullCard
          key={hotel_id}
          name={name}
          city={city}
          stars={stars}
          average_price={average_price}
          pool={pool}
          spa={spa}
          gym={gym}
          restaurant={restaurant}
          laundry={laundry}
        />
      )
    );
  }
  const result = filteredData(products, query);

  return (
    
    <>
    {isError !== "" && <h2>{isError}</h2>}
      <div>
        <SearchPageHeader />
      </div>
      <div className="hotelBody">
        <div className="sideBar">
          <FilterSidebar setFilters={setFilters} />
        </div>
        <div className="mainBody">
          <SortBar query={query} handleInputChange={handleInputChange} />
          <FullData result={result} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
