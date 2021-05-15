import './App.css';
import { useState } from 'react';
import ResultList from '../ResultList/ResultList';

function App(props) {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [resultArray, setResultArray] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setResultArray(resultArray => [...resultArray, Number(operand1) + Number(operand2)]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className="operand"
          type="number"
          value={operand1}
          onChange={e => setOperand1(e.target.value)}
          />

        <input
          className="operand"
          type="number"
          value={operand2}
          onChange={e => setOperand2(e.target.value)}
          />
        <input type="submit" value="=" />
      </form>

      <ResultList resultArray={resultArray} />


    </div>
  );
}

export default App;

