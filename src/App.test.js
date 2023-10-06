import { render, screen, act } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';
import { fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';


test('renders the header heading', () => {
  render(<BrowserRouter><Hero /></BrowserRouter>);
  const headingElement = screen.getByText('Little Lemon');
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
});

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
});

describe("Booking Form", () => {

  test('Shows available times after selecting a date', () => {
    render(<BrowserRouter><BookingForm availableTimes={["17:00", "18:00", "19:00"]} /></BrowserRouter>);
    const dateInput = screen.getByLabelText("Choose date");

    act(() => {
      fireEvent.change(dateInput, { target: { value: "2023-06-05" } });
    });

    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeInTheDocument();
    const timeOptions = screen.getAllByRole("option");
    expect(timeOptions).toHaveLength(3);
  });
})

