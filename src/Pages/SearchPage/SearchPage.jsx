import React, { useState, useEffect } from "react";
import { Header as SearchPageHeader } from "./SearchPageHeader";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import FullCard from "./FullCard";
import "./SearchPage.css";
import FullData from "./FullData";
import axios from "../../../src/axios";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [hasFreeWifi, setHasFreeWifi] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [hasSpa, setHasSpa] = useState(false);
  const [hasGym, setHasGym] = useState(false);
  const [hasRestaurant, setHasRestaurant] = useState(false);
  const [hasLaundry, setHasLaundry] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  let filters = products.map((product) => product.city.toLowerCase());
  filters = [...new Set(filters)];
  const handleFilterButtonCity = (selectedCity) => {
    const lowerCaseSelectedCity = selectedCity.toLowerCase();
    if (selectedCities.includes(lowerCaseSelectedCity)) {
      let updatedCities = selectedCities.filter(
        (city) => city !== lowerCaseSelectedCity
      );
      setSelectedCities(updatedCities);
    } else {
      setSelectedCities([...selectedCities, lowerCaseSelectedCity]);
    }
  };

  let starFilters = products.map((product) => product.stars);
  starFilters = [...new Set(starFilters)];
  const handleFilterButtonStars = (selectedStar) => {
    if (selectedStars.includes(selectedStar)) {
      let stars = selectedStars.filter((el) => el !== selectedStar);
      setSelectedStars(stars);
    } else {
      setSelectedStars([...selectedStars, selectedStar]);
    }
  };

  const handleFilterButtonFreeWifi = () => {
    setHasFreeWifi(!hasFreeWifi);
  };
  const handleFilterButtonPool = () => {
    setHasPool(!hasPool);
  };
  const handleFilterButtonSpa = () => {
    setHasSpa(!hasSpa);
  };
  const handleFilterButtonGym = () => {
    setHasGym(!hasGym);
  };
  const handleFilterButtonRestaurant = () => {
    setHasRestaurant(!hasRestaurant);
  };
  const handleFilterButtonLaundry = () => {
    setHasLaundry(!hasLaundry);
  };
  const handleMinPriceChange = (event) => {
    const newMinPrice = event.target.value;
    if (newMinPrice === "") {
      setMinPrice(0);
    } else if (newMinPrice >= 0) {
      setMinPrice(newMinPrice);
    }
  };
  const handleMaxPriceChange = (event) => {
    const newMaxPrice = event.target.value;
    if (newMaxPrice === "") {
      setMaxPrice(Infinity);
    } else if (newMaxPrice > minPrice) {
      setMaxPrice(newMaxPrice);
    }
  };

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const getMyPostData = async () => {
    try {
      const res = await axios.get("api/hotels/list/");
      setProducts(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getMyPostData();
  }, []);

  function filteredData(products, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    if (selectedCities.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCities.includes(product.city.toLowerCase())
      );
    }
    if (selectedStars.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedStars.includes(product.stars)
      );
    }
    if (hasFreeWifi) {
      filteredProducts = filteredProducts.filter(
        (product) => product.free_wifi
      );
    }
    if (hasPool) {
      filteredProducts = filteredProducts.filter((product) => product.pool);
    }
    if (hasSpa) {
      filteredProducts = filteredProducts.filter((product) => product.spa);
    }
    if (hasGym) {
      filteredProducts = filteredProducts.filter((product) => product.gym);
    }
    if (hasRestaurant) {
      filteredProducts = filteredProducts.filter(
        (product) => product.restaurant
      );
    }
    if (hasLaundry) {
      filteredProducts = filteredProducts.filter((product) => product.laundry);
    }
    if (minPrice > 0 || maxPrice < Infinity) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.min_price >= minPrice && product.max_price <= maxPrice
      );
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
        free_wifi,
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
          free_wifi={free_wifi}
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
          <FilterSidebar
            filters={filters}
            starFilters={starFilters}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleFilterButtonStars={handleFilterButtonStars}
            handleFilterButtonCity={handleFilterButtonCity}
            handleFilterButtonPool={handleFilterButtonPool}
            handleFilterButtonSpa={handleFilterButtonSpa}
            handleFilterButtonGym={handleFilterButtonGym}
            handleFilterButtonRestaurant={handleFilterButtonRestaurant}
            handleFilterButtonLaundry={handleFilterButtonLaundry}
            handleFilterButtonFreeWifi={handleFilterButtonFreeWifi}
            handleMinPriceChange={handleMinPriceChange}
            handleMaxPriceChange={handleMaxPriceChange}
          />
        </div>
        <div className="mainBody">
          <div className="sortB">
            <SortBar query={query} handleInputChange={handleInputChange} />
            </div>
          <FullData className="data" result={result} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
