import React from 'react'
import { useState } from 'react';

export default function BookingForm(props) {

    console.log('props', props.availableTimes);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option key={times}>{times}</option>)
    )

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleDate = (e) => {
        e.preventDefault();

        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);

        props.dispatch?.(date);

        setFinalTime(props.availableTimes.map((times) => <option key={times}>{times}</option>));
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
                    onChange={handleDate}>
                </input>
                <label aria-required="true" htmlFor="time">Choose time</label>
                <select id="time" required>
                    {finalTime}
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
