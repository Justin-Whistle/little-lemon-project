// import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { useReducer } from 'react';

export default function BookingPage() {
  var initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(date) {
    // return {availableTimes}
  }

  return (
    <div>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
  )
}
