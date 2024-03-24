import React from 'react'
import "./RoomCard.css"
import RoomImage from '../assets/room_image.png';
import propTypes from "prop-types";



function RoomCard (props) {
  return (
    <div className='Room-card'>
        <div>
            <img src={RoomImage} alt="" />
        </div>
        <div>
            <h1>{props.title}</h1>
            <h2>Features</h2>
            <ul>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
            </ul>
        </div>
        <div className='Price-Book'>
            <h2>Price:Rs{props.price}</h2>
            <button>Book Now</button>
        </div>
        
    
    </div>
  )
}

RoomCard.propTypes={
    title: propTypes.string,
    price: propTypes.any
};
RoomCard.defaultProps={
    title: "RoomName",
    price: "0",
};

export default RoomCard;






