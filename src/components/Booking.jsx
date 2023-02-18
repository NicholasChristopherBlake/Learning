import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Booking = (props) => {
  const navigate = useNavigate();
  const [resDate, setResDate] = useState(false);

  const [time, setTime] = useState('');
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  function changeDate(e) {
    setResDate(e.target.value);
    const newDate = new Date(e.target.value);
    props.dispatch({ type: 'change date', value: newDate })
  }
  const submit = (e) => {
    console.log(e.target.occasion.value)
    console.log(e.target.guests.value);
    console.log(e.target["res-time"].value)
    console.log(e.target["res-date"].value)
    e.preventDefault();
    props.submitForm(e.target.elements)
    navigate('/confirmed');
  }
  const validate = () => {
    return resDate
  }
  return (
    <div>
        <h1 className="form-title">Book Now</h1>
        <form className="form"
          onSubmit={submit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
          required
          value={resDate}
          onChange={changeDate}
          type="date"
          id="res-date"
          name="res-date"
          />
          <label htmlFor="res-time">Choose time</label>
          <select
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          id="res-time"
          name="res-time"
          >
            {props.availableTimes.map(time => {
              return <option key={time} value={time}>{time}</option>
            })}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
          required
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          />
          <label htmlFor="occasion">Occasion</label>
          <select
          required
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
          name="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input aria-label="On Click" disabled={!validate()} type="submit" value="Make Your reservation"/>
        </form>
    </div>
  )
};

export default Booking;
