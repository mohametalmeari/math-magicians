import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({});
  const calc = (e) => {
    setResult(calculate(result, e.target.value));
  };
  return (
    <div className="calculator-container">
      <p className="calculator-text">Let&apos;s do some math!</p>
      <div className="calculator">
        <p className="result">
          {result.next ? result.next : result.total}
        </p>
        <div className="calc-pad" role="presentation" onClick={(e) => { calc(e); }}>
          <button type="button" className="AC" value="AC">AC</button>
          <button type="button" className="sign" value="+/-">+/-</button>
          <button type="button" className="percent" value="%">%</button>
          <button type="button" className="operator division" value="÷">÷</button>
          <button type="button" className="num num7" value="7">7</button>
          <button type="button" className="num num8" value="8">8</button>
          <button type="button" className="num num9" value="9">9</button>
          <button type="button" className="operator multiplication" value="x">×</button>
          <button type="button" className="num num4" value="4">4</button>
          <button type="button" className="num num5" value="5">5</button>
          <button type="button" className="num num6" value="6">6</button>
          <button type="button" className="operator subtraction" value="-">-</button>
          <button type="button" className="num num1" value="1">1</button>
          <button type="button" className="num num2" value="2">2</button>
          <button type="button" className="num num3" value="3">3</button>
          <button type="button" className="operator Addition" value="+">+</button>
          <button type="button" className="num num0" value="0">0</button>
          <button type="button" className="num decimal" value=".">.</button>
          <button type="button" className="operator equal" value="=">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
