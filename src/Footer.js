import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <img src="./Mario and Adrian b.jpg" alt="restaurant owners" height={175} width={250}></img>
        <div className='doormat-nav'>
            <h2>Doormat Navigation</h2>
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="OrderReservations">Order Reservations</a></li>
                <li><a href="Order Online">Order Online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
        </div>
        <div className='contact'>
            <h2>Contact</h2>
            <ul>
                <li><a href="Address">Address</a></li>
                <li><a href="PhoneNumber">Phone Number</a></li>
                <li><a href="Email">Email</a></li>
            </ul>
        </div>
        <div className='social-media'>
            <h2>Social Media</h2>
            <ul>
                <li><a href="Facebook">Facebook</a></li>
                <li><a href="Instagram">Instagram</a></li>
                <li><a href="Snapchat">Snapchat</a></li>
            </ul>
        </div>
    </div>
  )
}
