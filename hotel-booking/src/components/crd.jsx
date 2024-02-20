import propTypes from "prop-types";
import "./card.css"
import pho from "./downlo.png"

function Card(props) {
  return (
    <div className="fullCard"> 
    <div className="card">
      <a href={props.link}>
        <img className="cardImage" src={props.image} alt="Destination" />
        <h2 className="cardTitle">{props.location}</h2>
        <p className="cardText">{props.country}</p>
      </a>
    </div>
    </div>
  );
}

Card.propTypes = {
  location: propTypes.string,
  country: propTypes.string,
  image: propTypes.any,
  link: propTypes.any,
};
Card.defaultProps = {
  location: "Location",
  country: "Country",
  image:pho,
  link: "./",
};

export default Card;