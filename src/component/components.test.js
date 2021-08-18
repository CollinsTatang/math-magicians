import React from 'react';
import { render, screen } from '@testing-library/react';
import './Quote.css';
import App from '../App';
import Home from './Home';
import Calculator from './Calculator'
import Quote from './Quote';
import userEvent from '@testing-library/user-event';

describe('Home component', () => {
  test('Home component render',() => {
    render(<Home />);
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument;
  })
});

describe('Calculator component', () => {
  test('Calculator component render', () => {
    render(<Calculator />);
    expect(screen.getByText(/Let's do some math/)).toBeInTheDocument;
  })
});

describe('Quote component', () => {
  test('Quote component render', () => {
    render(<Quote />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  })
});

describe('Click events', () => {

  test('Home click event', () => {
    render(<App />);
    userEvent.click(screen.getByText('Quote'));
    expect(screen.queryByText(/Welcome to our page!/)).toBeNull();
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument();
  })

  test('Calculator click event', () => {
    render(<App />);
    expect(screen.queryByText(/Let's do some math/)).toBeNull();
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText(/Let's do some math/)).toBeInTheDocument;
  })
});