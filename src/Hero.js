import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='heroSection'>
            <div className='heroLeft'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <br></br>
                <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes, and served with a modern twist</h3>
                <br></br>
                <Link to="/Reservations">
                <button className='hero-button'>RESERVE A TABLE</button>
                </Link>
            </div>
            <div className='heroRight'>
                <img src="./restauranfood.jpg" height={200} width={200} alt="restaurant food pic"></img>
            </div>
        </div>
    </div>
  )
}
