import React from 'react'
import { useState } from 'react';

export default function BookingForm(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState();
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Lunch");

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map(times => (
        <option key={times}>{times}</option>
      )));

    // function handleDateChange(e) {
    //     setDate(e.target.value);

    //     var stringify = e.target.value;
    //     const date = new Date(stringify);

    //     props.updateTimes(date);

    //     setFinalTime(props.availableTimes.map(times => (
    //     <option key={times}>{times}</option>
    //     )));
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setDate("");
        setTime("");
        setGuests("1");
        setOccasion("");
        console.log({ name, date, time, guests, occasion })
    }

    return (
        <div>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type=""
                    required
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}>
                </input>
                <label htmlFor="date">Choose date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={ e => setDate(e.target.value)}>
                </input>
                <label htmlFor="time">Choose time</label>
                <select id="time" value={time} onChange={e => setTime(e.target.value)}>
                    {finalTime}
                </select>
                <label htmlFor="guests">Party size: {guests}</label>
                <input
                    type="range"
                    value={guests}
                    placeholder="1" min="1" max="10" id="guests"
                    onChange={e => setGuests(e.target.value)}>
                </input>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input className="reserve-button" type="submit" value="Make Your reservation"></input>
            </form>
            {/* <p>{availableTimes}</p> */}
        </div>
    )
}
