import React from 'react'
import { useState } from 'react';

export default function BookingForm(props) {

    // console.log('props', props.availableTimes);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <div>
            <h1 className='title'>Reservation Booking Form</h1>
            <form aria-label="book a table" className="booking-form" onSubmit={handleSumbit}>
                <label aria-required="true" htmlFor="name">Name</label>
                <input
                    type=""
                    required
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}>
                </input>
                <label aria-required="true" htmlFor="date">Choose date</label>
                <input
                    type="date"
                    id="date"
                    required
                    value={date}
                    onChange={(e) => handleChange(e.target.value)}>
                </input>
                <label aria-required="true" htmlFor="time">Choose time</label>
                <select id="time" value={times} required onChange={(e) => setTimes(e.target.value)}>
                {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                </select>
                <label aria-required="true" htmlFor="guests">Party size: {guests}</label>
                <input
                    type="range"
                    required
                    value={guests}
                    placeholder="1" min="1" max="10" id="guests"
                    onChange={e => setGuests(e.target.value)}>
                </input>
                <label htmlFor="occasion">Occasion</label>
                <select aria-required="true" id="occasion" value={occasion} required onChange={e => setOccasion(e.target.value)}>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input aria-label="On Click" className='reserve-button' type={"submit"} value={"Make Your Reservation"}></input>
            </form>
        </div>
    )
}
