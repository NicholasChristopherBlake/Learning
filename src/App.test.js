import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App, { initializeTimes, updateTimes, fetchAPI, seededRandom } from './App';
import Booking from './components/Booking';


test('Renders the Booking date input', () => {
    render(<Booking availableTimes={[1,2]}/>, {wrapper: BrowserRouter});
    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();
});

describe('App', () => {
  test('initializeTimes returns an array', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
  });
});

describe('initializeTimes', () => {
  it('should return a non-empty array of available booking times', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});

test('should return the same value that is provided in the state', () => {
  const state = ["9:00", "10:00", "11:00"];
  const action = { type: 'change date', value: new Date('2023-02-20') };
  const updatedState = updateTimes(state, action);
  expect(updatedState).toEqual(["17:00", "17:30", "18:00", "19:00", "21:00", "22:00", "23:00"]);
});

