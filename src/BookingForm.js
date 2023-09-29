import React from 'react'
import { useState } from 'react';

export default function BookingForm() {
    const [reservation, setReservation]=useState([
        {
            name:"",
            date:"",
            time:"",
            guests:"",
            occasion:""
        }
    ])
    // const [availableTimes, setAvailableTimes]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setReservation('')
        console.log({reservation})
    }

    return (
        <div>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type=""
                    required
                    id="name"
                    value={reservation.name}
                    onChange={e => setReservation({...reservation, name: e.target.value})}>
                </input>
                <label htmlFor="date">Choose date</label>
                <input
                    type="date"
                    id="date"
                    value={reservation.date}
                    onChange={e => setReservation({...reservation, date: e.target.value})}>
                </input>
                <label htmlFor="time">Choose time</label>
                <select id="time" onChange={e => setReservation({...reservation, time: e.target.value})}>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <label htmlFor="guests">Party size: {reservation.guests}</label>
                <input
                    type="range"
                    value={reservation.guests}
                    placeholder="1" min="1" max="10" id="guests"
                    onChange={e => setReservation({...reservation, guests: e.target.value})}>
                </input>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={e => setReservation({...reservation, occasion: e.target.value})}>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input className="reserve-button" type="submit" value="Make Your reservation"></input>
            </form>
        </div>
    )
}
// const [name, setName] = useState("")
// const [date, setDate] = useState("")
// const [time, setTime] = useState()
// const [guests, setGuests] = useState()
// const [occasion, setOccasion] = useState("Lunch")