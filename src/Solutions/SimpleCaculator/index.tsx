import React, { useState } from 'react';
import './SimpleCaculator.css'

const SimpleCalculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  const handleNumberPress = (number: string): void => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorPress = (op: string): void => {
    if (currentValue !== '') {
      const result = calculate(parseFloat(currentValue), parseFloat(displayValue), operator);
      setDisplayValue(result.toString());
      setCurrentValue(result.toString());
    } else {
      setCurrentValue(displayValue);
    }
    setOperator(op);
    setDisplayValue('0');
  };

  const calculate = (value1: number, value2: number, op: string): number => {
    switch (op) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return value2;
    }
  };

  const handleEqualsPress = (): void => {
    if (currentValue !== '' && operator !== '') {
      const result = calculate(parseFloat(currentValue), parseFloat(displayValue), operator);
      setDisplayValue(result.toString());
      setCurrentValue('');
      setOperator('');
    }
  };

  const handleClearPress = (): void => {
    setDisplayValue('0');
    setCurrentValue('');
    setOperator('');
  };
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberPress('7')}>7</button>
          <button onClick={() => handleNumberPress('8')}>8</button>
          <button onClick={() => handleNumberPress('9')}>9</button>
          <button onClick={handleClearPress}>R</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberPress('4')}>4</button>
          <button onClick={() => handleNumberPress('5')}>5</button>
          <button onClick={() => handleNumberPress('6')}>6</button>
          <button onClick={() => handleOperatorPress('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberPress('1')}>1</button>
          <button onClick={() => handleNumberPress('2')}>2</button>
          <button onClick={() => handleNumberPress('3')}>3</button>
          <button onClick={() => handleOperatorPress('-  ')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberPress('0')}>0</button>
          <button onClick={handleEqualsPress}>=</button>
          <button onClick={() => handleOperatorPress('*')}>*</button>
          <button onClick={() => handleOperatorPress('/  ')}>/</button>
        </div>
      </div>
    </div>
  );

};

export default SimpleCalculator;

 