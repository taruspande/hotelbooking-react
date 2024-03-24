import propTypes from "prop-types";
import "./HotelCard.css";
import pho from "./download.jpeg";

function Card(item) {
  return (
    <div className="fullCard">
      <div className="card">
        <a href={item.link}>
          <div className="cardImg">
            <h1 className="cardTitle">{item.name}</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: propTypes.string,
  image_url: propTypes.any,
  // link: propTypes.any,
};
Card.defaultProps = {
  name: "LOCATION",
  image_url: pho,
  // link: "./",
};

export default Card;
