import React from 'react'
import './Reviews.css'
import propTypes from "prop-types";


function Reviews (props){
  return (
    <div className='Review-Card'>
        <h1>{props.title1}</h1>
        <h2>{props.title2}</h2>
        <h3>{props.title3}</h3>
    </div>
  )
}

Reviews.propTypes={
    title1:propTypes.string,
    title2:propTypes.string,
    title3:propTypes.string,


}
Reviews.defaultProps={
    title1:"Excellent Stay",
    title2: "Rated 5.0 by ABC. dd/mm/yyyy",
    title3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, quisquam dolorum! Atque modi illo vitae earum rem rerum et. Enim quasi voluptates similique ratione. Dicta eligendi perferendis vero tenetur ipsam!"


}


export default Reviews;
