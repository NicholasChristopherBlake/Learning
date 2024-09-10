import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import About from './components/pages/About';
import BookingPage from './components/pages/BookingPage';
import { useReducer } from 'react';
import ConfirmedBooking from './components/pages/ConfirmedBooking';
import Error from './components/pages/Error';

export function fetchAPI(date) {
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
}
export function seededRandom(seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}
export function initializeTimes() {
  return fetchAPI(new Date());
}
export function updateTimes(state, action) {
  if (action.type === 'change date') {
    console.log('action.value', action.value.getDate())
    return fetchAPI(action.value)
  }
}

function App() {

  const submitAPI = function(formData) {
    console.log('Submitted')
    return true;
  };

  const submitForm = (formData) => {
    return submitAPI(formData);
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/little_lemon_capstone_project" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/error" element={<Error />} />
        <Route element={<Navigate to="/error" replace/>} path="/menu" />
        <Route element={<Navigate to="/error" replace/>} path="/order" />
        <Route element={<Navigate to="/error" replace/>} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;