// import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { useReducer } from 'react';
import { fetchAPI } from './BookingAPI';

export default function BookingPage() {

  const output = fetchAPI(new Date());

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  )
}
