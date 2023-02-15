import React, { useState } from "react"

const Booking = () => {
  const [resDate, setResDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ])
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
          <label htmlFor="res-date">Choose date</label>
          <input value={resDate} onChange={(e) => setResDate(e.target.value)}
          type="date" id="res-date" />
          <label htmlFor="res-time">Choose time</label>
          <select value={time} onChange={(e) => setTime(e.target.value)}
          id="res-time ">
            {availableTimes.map(time => {
              return <option key={time} value={time}>{time}</option>
            })}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input value={guest} onChange={(e) => setGuest(e.target.value)}
          type="number" placeholder="1" min="1" max="10" id="guests"/>
          <label htmlFor="occasion">Occasion</label>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)}
          id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input onSubmit={submit} type="submit" value="Make Your reservation"/>
        </form>
    </div>
  )
};

export default Booking;
