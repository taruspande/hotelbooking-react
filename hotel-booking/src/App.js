import React from "react";
import "./App.css";
import Carousel from "./Components/Carousel/Carousel.jsx";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer/Footer.jsx";
import { Hotel } from "./Components/Hotel.jsx";

function App() {
  return (
    <div>
      <Header />
      <h1 className="carousel-heading">Popular Destinations</h1>
      <Carousel />
      <h1 className="carousel-heading">Top Rated Hotels</h1>
      <div style={{ marginBottom: 100 }}>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
