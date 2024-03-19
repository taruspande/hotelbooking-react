import React from 'react'
import './Hotel.css'
import mapImage from '../assets/map.png';

export const Hotel = () => {
  return (
    <>
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
            <h1 className="main">ABC Hotel</h1>
        </div>
        <div className='overview-map'>
            <div>
                <h1>Overview</h1>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi praesentium suscipit dolores repellendus quae eveniet recusandae facere optio atque beatae quisquam blanditiis voluptatum, voluptas assumenda harum, iste aspernatur illo qui.
                Qui itaque tempore debitis provident, reiciendis, commodi voluptates ea, explicabo tempora voluptatem tenetur ad repellendus illum earum dolorum optio laudantium maiores! Aut accusantium, eos provident eveniet dolorum laboriosam! Sint, deleniti.
                Placeat fugiat veniam, sapiente minima distinctio mollitia aspernatur id obcaecati maiores officia officiis. Soluta, quae. Quasi, reiciendis ad? Fugit reiciendis doloremque deserunt, earum quidem harum corporis adipisci culpa voluptates dolorem.</h3>
            </div>
            <div>
                <img className='map' src={mapImage} alt="Map" />
            </div>
        </div>
        

        <div className='locality-highlights'>
            <div>
                <h1>Locality and nearby Destinations</h1>
                <ul>
                    <li><h3>2minutes away from International Airport</h3></li>
                    <li><h3>15 minutes away from City Center</h3></li>
                </ul>
            </div>
            <div>
                <h1>Highlights</h1>
                <ul>
                    <li><h3>ABC</h3></li>
                    <li><h3>ABC</h3></li>
                    <li><h3>ABC</h3></li>
                </ul>
            </div>

        </div>
        
        <div>
            <h1>Rooms</h1>
        </div>
        <div>
            <h1>Reviews</h1>
            <div className='review-and-ratings'>
                <div>
                <h1>3.9 Very Good</h1>
                </div>
                <div>
                    <h3>490 user reviews and 800 ratings</h3>
                </div>


            </div>


        </div>
    </body>
    
    </>
    
  )
}
