import './App.css';
import Footer from './components/Footer';
import Specials from './components/Specials';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import About from './components/pages/About';
import BookingPage from './components/pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
