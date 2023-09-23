
import '@testing-library/jest-dom'
import { render, screen, fireEvent} from "@testing-library/react"
import Reservation from '../pages/reservation'; // Import your component here
import React from "react";

test("Test reservation", () => {

    const setState = jest.fn();
    jest.mock('../assets/LogoLittleLemon.png')
    jest.spyOn(React, 'useState')
        .mockImplementation(() => ['', setState]);
    render(<Reservation />);
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Paul' } });

    expect(setState).toHaveBeenCalledWith('Paul');
});
/*
describe('Reservation component', () => {
  it('should display an error message when form is submitted with empty fields', () => {
    render(<Reservation />);

    const reserveButton = screen.getByText('Reserve');
    fireEvent.click(reserveButton);

// Assert that an error message is displayed for each empty field
    expect(screen.getByText('Date is empty')).toBeInTheDocument();
    expect(screen.getByText('Time is empty')).toBeInTheDocument();
    expect(screen.getByText('Amount of tables is empty')).toBeInTheDocument();
    expect(screen.getByText('Name is empty')).toBeInTheDocument();
    expect(screen.getByText('Email is empty')).toBeInTheDocument();

// Assert that the success message is not displayed
    expect(screen.queryByText('The Reservation was done successfully!')).toBeNull();
  });

  it('should not display error messages when form is submitted with all fields filled', () => {
    render(<Reservation />);

      // Fill in all form fields
    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');
    const amountInput = screen.getByLabelText('Amount of tables');
    const nameInput = screen.getByLabelText('Your name');
    const emailInput = screen.getByLabelText('Your email adress');

    fireEvent.change(dateInput, { target: { value: '2023-09-21' } });
    fireEvent.change(timeInput, { target: { value: '14:00' } });
    fireEvent.change(amountInput, { target: { value: '2' } });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    const reserveButton = screen.getByText('Reserve');
    fireEvent.click(reserveButton);

// Assert that no error messages are displayed
    expect(screen.queryByText('Date is empty')).toBeNull();
    expect(screen.queryByText('Time is empty')).toBeNull();
    expect(screen.queryByText('Amount of tables is empty')).toBeNull();
    expect(screen.queryByText('Name is empty')).toBeNull();
    expect(screen.queryByText('Email is empty')).toBeNull();

// Assert that the success message is displayed
    expect(screen.getByText('The Reservation was done successfully!')).toBeInTheDocument();
  });
});
 */
