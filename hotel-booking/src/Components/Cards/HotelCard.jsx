import propTypes from "prop-types";
import "./HotelCard.css";
import pho from "./download.jpeg";

function Card(props) {
  return (
    <div className="fullCard">
      <div className="card">
        <a href={props.link}>
          <div className="cardImg">
            <h1 className="cardTitle">{props.title}</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string,
  image: propTypes.any,
  link: propTypes.any,
};
Card.defaultProps = {
  title: "LOCATION",
  image: pho,
  link: "./",
};

export default Card;
