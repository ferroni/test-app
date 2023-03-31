import { fireEvent, render, screen } from '@testing-library/react';
import TestColorButton from './TestColorButton';
import '../../App.css';

test('button has correct initial color', () => {
  render(<TestColorButton />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  expect(colorButton).toHaveStyle({ 'background-color': '#f00' });
});

test('button turns blue when clicked', () => {
  render(<TestColorButton />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ 'background-color': '#00f' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<TestColorButton />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button',
  });
  expect(checkbox).not.toBeChecked();

  expect(colorButton).toHaveStyle({ 'background-color': '#f00' });
});
