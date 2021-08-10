import React from 'react';

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

    this.state = {
      displayNum: '0',
    };
  }

  render() {
    const { displayNum } = this.state;

    return (
      <div className="calculator-board">
        <p className="output-box">{displayNum}</p>
        <div className="grid">
          {buttons.map(({ text, className }) => <button className={`grid-item  ${className || ''}`} key={text} type="button">{text}</button>)}
        </div>
      </div>
    );
  }
}

export default Calculator;
