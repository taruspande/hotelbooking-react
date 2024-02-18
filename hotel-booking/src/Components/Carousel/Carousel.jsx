import React from 'react'
import './Carousel.css'
import Card from "C:/Users/Ronak/Desktop/Coding/HotelBook/hotelbooking-react/hotel-booking/src/Components//Cards/HotelCard.jsx"
// import "C:/Users/Ronak/Desktop/Coding/HotelBook/hotelbooking-react/hotel-booking/slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
const Carousel = () => {
  const settings = {
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  )
}

export default Carousel

