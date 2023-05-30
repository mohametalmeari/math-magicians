import PropTypes from 'prop-types';
import './Calculator.css';

const Calculator = ({ result }) => (
  <div className="container">
    <p className="result">
      {result}
    </p>
    <div className="calc-pad">
      <span className="AC">AC</span>
      <span className="sign">+/-</span>
      <span className="percent">%</span>
      <span className="operator division">÷</span>
      <span className="num num7">7</span>
      <span className="num num8">8</span>
      <span className="num num9">9</span>
      <span className="operator multiplication">×</span>
      <span className="num num4">4</span>
      <span className="num num5">5</span>
      <span className="num num6">6</span>
      <span className="operator subtraction">-</span>
      <span className="num num1">1</span>
      <span className="num num2">2</span>
      <span className="num num3">3</span>
      <span className="operator Addition">+</span>
      <span className="num num0">0</span>
      <span className="num decimal">.</span>
      <span className="operator equal">=</span>
    </div>
  </div>
);

Calculator.propTypes = {
  result: PropTypes.number,
};

Calculator.defaultProps = {
  result: 0,
};

export default Calculator;
