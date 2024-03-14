import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = () => {
  const [rating, setRating] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [price, setPrice] = useState({
    min: "",
    max: "",
  });

  const [propertyType, setPropertyType] = useState({
    villa: false,
    hotel: false,
    resort: false,
  });
  const [userRating, setUserRating] = useState({
    Excellent: false,
    Very_Good: false,
    Good: false,
  });

  const handleRatingChange = (event) => {
    setRating({ ...rating, [event.target.name]: event.target.checked });
  };
  const handleuserRatingChange = (event) => {
    setUserRating({ ...userRating, [event.target.name]: event.target.checked });
  };

  const handlePriceChange = (event) => {
    setPrice({ ...price, [event.target.name]: event.target.value });
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType({
      ...propertyType,
      [event.target.name]: event.target.checked,
    });
  };
  const handlePriceSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the price range submission
    console.log(price);
  };

  return (
    <div className="filterSidebar">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9n5jJ6_kQK6aElQtOFBj_tkXWosupAJVKg&usqp=CAU"
          alt="Maps img"
        />
      </div>
      <h3>Filters</h3>
      <form onSubmit={handlePriceSubmit}>
        <label className="sideBarcompo">Price Range</label>
        <div className="priceBar">
          <input
            className="priceInt"
            type="number"
            name="min"
            value={price.min}
            onChange={handlePriceChange}
            placeholder="Min"
          />
          <span className="arrow">-</span>
          <input
            className="priceInt"
            type="number"
            name="max"
            value={price.max}
            onChange={handlePriceChange}
            placeholder="Max"
          />
          <button type="submit">
            <i className="fa fa-arrow-right" id="submitArrow"></i>
          </button>
        </div>
      </form>
      <label className="sideBarcompo">Star Rating</label>
      <div className="starBar">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="starRating">
            <label>
              <input
                type="checkbox"
                name={star}
                checked={rating[star]}
                onChange={handleRatingChange}
              />
              <span>
                {star} Star{" "}
                <span>
                  {Array.from({ length: star }).map((_, i) => (
                    <i key={i} className="fa fa-star" id="countStar"></i>
                  ))}
                </span>
              </span>
            </label>
          </div>
        ))}
      </div>

      <label className="sideBarcompo">User Rating</label>
      <div className="userBar">
        {["Excellent: 4.2", "Very Good: 3.5", "Good: 3"].map((user) => (
          <div key={user}>
            <label>
              <input
                type="checkbox"
                name={user}
                checked={rating[user]}
                onChange={handleuserRatingChange}
              />
              <span>{user} +</span>
            </label>
          </div>
        ))}
      </div>
      <label className="sideBarcompo">Property Type</label>
      <div className="propertyBar">
        {["villas", "hotels", "resorts"].map((type) => (
          <div key={type}>
            <label>
              <input
                type="checkbox"
                name={type}
                checked={propertyType[type]}
                onChange={handlePropertyTypeChange}
              />
              <span> {type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          </div>
        ))}
      </div>
      {/* Rest of the code */}
    </div>
  );
};

export default FilterSidebar;
