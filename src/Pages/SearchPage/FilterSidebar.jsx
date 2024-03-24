import React from "react";
import "./FilterSidebar.css";

const Checkbox = ({ label, onChange }) => (
  <div>
    <label>
      <input type="checkbox" onChange={onChange} />
      <span>{label}</span>
    </label>
  </div>
);

const FilterSidebar = ({
  filters,
  handleFilterButtonCity,
  starFilters,
  handleFilterButtonStars,
  handleFilterButtonFreeWifi,
  handleFilterButtonPool,
  handleFilterButtonSpa,
  handleFilterButtonGym,
  handleFilterButtonRestaurant,
  handleFilterButtonLaundry,
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}) => {
  const amenities = [
    { label: "Free Wifi", onChange: handleFilterButtonFreeWifi },
    { label: "Pool", onChange: handleFilterButtonPool },
    { label: "Spa", onChange: handleFilterButtonSpa },
    { label: "Gym", onChange: handleFilterButtonGym },
    { label: "Restaurant", onChange: handleFilterButtonRestaurant },
    { label: "Laundry", onChange: handleFilterButtonLaundry },
  ];

  return (
    <div className="filterSidebar">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9n5jJ6_kQK6aElQtOFBj_tkXWosupAJVKg&usqp=CAU"
          alt="Maps img"
        />
      </div>

      <h3>Filters</h3>
      <form onSubmit={(event) => event.preventDefault()}>
        <label className="sideBarcompo">Price Range</label>
        <div className="priceBar">
          <input
            className="priceInt"
            type="number"
            value={minPrice === 0 ? "Min" : minPrice}
            onChange={handleMinPriceChange}
            placeholder="Min"
          />
          <span className="arrow">-</span>
          <input
            className="priceInt"
            type="number"
            name="max"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max"
          />
          <button type="Submit">
            <i className="fa fa-arrow-right" id="submitArrow"></i>
          </button>
        </div>
      </form>

      <label className="sideBarcompo">Star Rating</label>
      <div className="starBar">
        {starFilters
          .sort((a, b) => b - a)
          .map((star) => (
            <div key={star} className="starRating">
              <label>
                <input
                  type="checkbox"
                  onClick={() => handleFilterButtonStars(star)}
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

      <label className="sideBarcompo">Destinations</label>
      <div className="userBar">
        {filters.map((city, idx) => (
          <div key={`filters-${idx}`}>
            <label>
              <input
                value={city}
                type="checkbox"
                onClick={() => handleFilterButtonCity(city)}
              />
              <span>{city.charAt(0).toUpperCase() + city.slice(1)}</span>
            </label>
          </div>
        ))}
      </div>

      <label className="sideBarcompo">Amenities</label>
      <div className="propertyBar">
        {amenities.map((amenity, idx) => (
          <Checkbox
            key={idx}
            label={amenity.label}
            onChange={amenity.onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
