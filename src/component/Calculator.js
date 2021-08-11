import React from 'react';
import calculate from '../logic/calculator';

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

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickHandler = (e) => {
    this.setState((nextState) => calculate(nextState, e.target.value));
  };

  displayOutput = () => {
    const { total, next, operation } = this.state;
    const displayNum = (total || '') + (operation || '') + (next || '');

    return displayNum || '0';
  };

  render() {
    return (
      <div className="calculator-board">
        <div className="output-box">
          <p>{this.displayOutput()}</p>
        </div>
        <div className="grid">
          {buttons.map(({ text, className }) => (
            <input
              value={text}
              className={`button grid-item ${className || ''}`}
              key={text}
              type="button"
              onClick={this.onClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
