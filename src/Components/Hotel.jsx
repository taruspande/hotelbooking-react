import React, { useEffect, useState } from "react";
import "./Hotel.css";
import mapImage from "../assets/map.png";
import axios from "../axios.jsx";

export const Hotel = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("api/hotels/list/");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}
      {myData.map((post) => {
        const { name, hotel_id, overview, stars, nearby,pool,
            spa,
            gym,
            restaurant,
            laundry, } = post;
            const amenities = [
                { name: 'Pool', value: pool },
                { name: 'Spa', value: spa },
                { name: 'Gym', value: gym },
                { name: 'Restaurant', value: restaurant },
                { name: 'Laundry', value: laundry },
              ];
              const trueAmenities = amenities.filter(amenity => amenity.value);
        return (
          < div key={hotel_id}>
            <header>
              <nav className="top-bar">
                <ul>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Login</li>
                </ul>
              </nav>
              <nav className="middle-bar">
                <ul>
                  <li>Overview</li>
                  <li>Review</li>
                  <li>Rooms</li>
                </ul>
              </nav>
            </header>
            <body>
              <div>
                <h1 className="main">{name}</h1>
              </div>
              <div className="overview-map">
                <div>
                  <h1>Overview</h1>
                  <h3>
                    {overview}
                  </h3>
                </div>
                <div>
                  <img className="map" src={mapImage} alt="Map" />
                </div>
              </div>

              <div className="locality-highlights">
                <div>
                  <h1>Locality and nearby Destinations</h1>
                  <ul>
                    <li>
                      <h3>{nearby}</h3>
                    </li>
                    {/* <li>
                      <h3>15 minutes away from City Center</h3>
                    </li> */}
                  </ul>
                </div>
                <div>
                  <h1>Highlights</h1>
                  {trueAmenities.map((amenity, index) => (
    <li key={index}>{amenity.name}</li>
  ))}
                </div>
              </div>

              <div>
                <h1>Rooms</h1>
              </div>
              <div>
                <h1>Reviews</h1>
                <div className="review-and-ratings">
                  <div>
                    <h1>{stars} {stars > 4 ? "Very Good" : stars < 2 ? "Average" : "Good"}</h1>
                  </div>
                  <div>
                    <h3>490 user reviews and 800 ratings</h3>
                  </div>
                </div>
              </div>
            </body>
          </div>
        );
      })}
    </>
  );
};
