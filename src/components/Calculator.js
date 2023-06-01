import PropTypes from 'prop-types';
import './Calculator.css';
import { useState } from 'react';

const Calculator = ({ result }) => {
  return (
  <div className="container">
    <p className="result">
      {result}
    </p>
    <div className="calc-pad" onClick={(e) => {console.log(e.target.value)}}>
      <button className="AC" value={"AC"}>AC</button>
      <button className="sign" value={"+/-"}>+/-</button>
      <button className="percent" value={"%"}>%</button>
      <button className="operator division" value={"÷"}>÷</button>
      <button className="num num7" value={"7"}>7</button>
      <button className="num num8" value={"8"}>8</button>
      <button className="num num9" value={"9"}>9</button>
      <button className="operator multiplication" value={"×"}>×</button>
      <button className="num num4" value={"4"}>4</button>
      <button className="num num5" value={"5"}>5</button>
      <button className="num num6" value={"6"}>6</button>
      <button className="operator subtraction" value={"-"}>-</button>
      <button className="num num1" value={"1"}>1</button>
      <button className="num num2" value={"2"}>2</button>
      <button className="num num3" value={"3"}>3</button>
      <button className="operator Addition" value={"+"}>+</button>
      <button className="num num0" value={"0"}>0</button>
      <button className="num decimal" value={"."}>.</button>
      <button className="operator equal" value={"="}>=</button>
    </div>
  </div>
)};

Calculator.propTypes = {
  result: PropTypes.number,
};

Calculator.defaultProps = {
  result: 0,
};

export default Calculator;
