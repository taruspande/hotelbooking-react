import React from "react";
import "./Carousel.css";
import Card from "../Cards/HotelCard.jsx";
import Slider from "react-slick";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SampleNextArrow(props) {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "#5F230F", fontSize: "50px" }} />
    </div>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "#5F230F", fontSize: "50px" }} />
    </div>
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const Carousel = ({ data }) => {
  const defaultData = [
    { id: 1, name: "Default Hotel 1", image_url: "default_image_url_1", link: "/" },
    { id: 2, name: "Default Hotel 2", image_url: "default_image_url_2", link: "/" },
    { id: 3, name: "Default Hotel 3", image_url: "default_image_url_2", link: "/" },
    { id: 4, name: "Default Hotel 4", image_url: "default_image_url_2", link: "/" },
    { id: 5, name: "Default Hotel 5", image_url: "default_image_url_2", link: "/" },
    // Add more default items as needed
  ];

  const items = data && data.length > 0 ? data : defaultData;

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
      {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other prop types as needed
    })
  ).isRequired,
};

export default Carousel;
