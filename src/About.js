import React from 'react'

export default function About() {
  return (
    <div className='about'>
    <div className='about-left'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <br></br>
        <h3>Little Lemon is a charming neighborhood bistro tha serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</h3>
    </div>
    <div className='about-right'>
        <img src="./restauranfood.jpg" height={200} width={200} alt="restaurant food pic"></img>
    </div>
</div>
  )
}
