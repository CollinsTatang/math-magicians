import React from 'react';
import { render, screen } from '@testing-library/react';
import './Quote.css';
import App from '../App';
import Home from './Home';
import Calculator from './Calculator'
import Quote from './Quote';

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
})
