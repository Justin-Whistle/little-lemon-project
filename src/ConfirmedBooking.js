import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmedBooking() {
  return (
    <div className='confirmed-booking'>
        <h1>You're reservation is confirmed!</h1>
        <br></br>
        <Link to="/">
            <button className='bookingHome-button'>Return Home</button>
        </Link>
    </div>
  )
}
