import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import About from './components/pages/About';
import BookingPage from './components/pages/BookingPage';
import { useReducer, useEffect, useState } from 'react';
import ConfirmedBooking from './components/pages/ConfirmedBooking';
import { useNavigate, Navigate } from 'react-router-dom';


function App() {
  // const [submitted, setSubmitted] = useState(false);
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }
  function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };
  const submitAPI = function(formData) {
    console.log('Submitted')
    return true;
  };

  const submitForm = (formData) => {
    return submitAPI(formData);
  }
  // let navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/confirmed')
  // }, [submitted])
  function updateTimes(state, action) {
    if (action.type === 'change date') {
      console.log('action.value', action.value.getDate())
      return fetchAPI(action.value)
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  function initializeTimes() {
    return fetchAPI(new Date())
  }

  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
        />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
  );
}

export default App;
