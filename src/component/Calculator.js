import React, { useCallback, useState } from 'react';
import calculate from '../logic/calculator';
import './Calculator.css';

const buttons = [
  {
    text: 'AC',
  },
  {
    text: '+/-',
  },
  {
    text: '%',
  },
  {
    text: '÷',
    className: 'btn-color',
  },
  {
    text: '7',
  },
  {
    text: '8',
  },
  {
    text: '9',
  },
  {
    text: 'x',
    className: 'btn-color',
  },
  {
    text: '4',
  },
  {
    text: '5',
  },
  {
    text: '6',
  },
  {
    text: '-',
    className: 'btn-color',
  },
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '+',
    className: 'btn-color',
  },
  {
    text: '0',
    className: 'span-2-col',
  },
  {
    text: '.',
  },
  {
    text: '=',
    className: 'btn-color',
  },
];

const Calculator = () => {
  const [state, setState] = useState({});

  const onClickHandler = useCallback((e) => {
    setState((nextState) => {
      try {
        const display = calculate(nextState, e.target.value);
        return ({
          ...nextState,
          ...display,
        });
      } catch (error) {
        return nextState;
      }
    });
  }, []);

  const { total, next, operation } = state;
  const displayNum = (total || '') + (operation || '') + (next || '');

  return (
    <div className="calculator-board">
      <div className="output-box">
        <p>{displayNum || '0'}</p>
      </div>
      <div className="grid">
        {buttons.map(({ text, className }) => (
          <input
            value={text}
            className={`button grid-item ${className || ''}`}
            key={text}
            type="button"
            onClick={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

const CalculatorPage = () => (
  <section className="calculator-container">
    <h2 className="section-title">Let&apos;s do some math</h2>
    <div className="calculator-content">
      <Calculator />
    </div>
  </section>
);

export default CalculatorPage;
