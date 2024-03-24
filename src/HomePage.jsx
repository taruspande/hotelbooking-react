import React from "react";
import { useEffect, useState } from "react";

import styles from "./HomePage.css";
import Carousel from "./Components/Carousel/Carousel.jsx";
import { Header } from "./Components/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Hotel} from "./Components/Hotel.jsx"; // Import Hotel component
import SearchPage from "./Pages/SearchPage/SearchPage.jsx";

function HomePage() {
  const [topRatedHotels, setTopRatedHotels] = useState([]);
  useEffect(() => {
    // Fetch top rated hotels data from backend
    fetchTopRatedHotels();
  }, []);
  const fetchTopRatedHotels = async () => {
    try {
      const response = await fetch('http://your-backend-url/top-rated-hotels');
      if (response.ok) {
        const data = await response.json();
        setTopRatedHotels(data);
      } else {
        console.error('Failed to fetch top rated hotels');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className={styles.className}>
      {/* <Hotel/> */}

    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />

                <h1 className="carousel-heading">Popular Destinations</h1>
                <Carousel />
                <h1 className="carousel-heading">Top Rated Hotels</h1>
                <div style={{ marginBottom: 100 }}>
                <Carousel data={topRatedHotels}/>
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/search-page" element={<SearchPage />} /> // Define route for Hotel component

        </Routes>
      </div>
    </BrowserRouter>  
    </div>
  );
}

export default HomePage;