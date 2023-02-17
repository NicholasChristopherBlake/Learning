import { render, screen } from '@testing-library/react';
import App from './App';
import Booking from './components/Booking';

test('Renders the BookingForm date input', () => {
    render(<Booking />);
    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();
});

test('initializeTimes function return the corrent value', () => {
  render(<App />);
  expect(initializeTimes()).toBe([]);
});

test('updateTimes function returns the same value that being provided', () => {
  render(<App />);
  expect(updateTimes('17:00')).toBe('17:00');
});