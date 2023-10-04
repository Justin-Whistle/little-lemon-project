// import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
// import { useReducer } from 'react';

export default function BookingPage(props) {
  // console.log(props.availableTimes)
  return (
    <>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
      
    </>
  )
}
