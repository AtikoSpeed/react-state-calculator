import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [sign, setSign] = useState("+");
  const [calculation, setCalculation] = useState(0);

  function addCalcNumber(buttonValue) {
    setCount(count * 10 + buttonValue);
  }

  function addOtherCalcNumber(buttonValue) {
    setOtherCount(otherCount * 10 + buttonValue);
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{count}</p>
        <div className="numbers">
          <button onClick={() => addCalcNumber(1)}>1</button>
          <button onClick={() => addCalcNumber(2)}>2</button>
          <button onClick={() => addCalcNumber(3)}>3</button>
          <button onClick={() => addCalcNumber(4)}>4</button>
          <button onClick={() => addCalcNumber(5)}>5</button>
          <button onClick={() => addCalcNumber(6)}>6</button>
          <button onClick={() => addCalcNumber(7)}>7</button>
          <button onClick={() => addCalcNumber(8)}>8</button>
          <button onClick={() => addCalcNumber(9)}>9</button>
          <button onClick={() => addCalcNumber(0)}>0</button>
          <button onClick={() => setCount(count * 0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{sign}</p>
        <div className="numbers">
          <button onClick={() => setSign("+")}>+</button>
          <button onClick={() => setSign("-")}>-</button>
          <button onClick={() => setSign("*")}>*</button>
          <button onClick={() => setSign("/")}>/</button>
        </div>
      </div>

      <div className="panel">
        <p>{otherCount}</p>
        <div className="numbers">
          <button onClick={() => addOtherCalcNumber(1)}>1</button>
          <button onClick={() => addOtherCalcNumber(2)}>2</button>
          <button onClick={() => addOtherCalcNumber(3)}>3</button>
          <button onClick={() => addOtherCalcNumber(4)}>4</button>
          <button onClick={() => addOtherCalcNumber(5)}>5</button>
          <button onClick={() => addOtherCalcNumber(6)}>6</button>
          <button onClick={() => addOtherCalcNumber(7)}>7</button>
          <button onClick={() => addOtherCalcNumber(8)}>8</button>
          <button onClick={() => addOtherCalcNumber(9)}>9</button>
          <button onClick={() => addOtherCalcNumber(0)}>0</button>
          <button onClick={() => setOtherCount(otherCount * 0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{calculation}</p>
        <div>
          <button
            onClick={() => setCalculation(eval(count + sign + otherCount))}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
