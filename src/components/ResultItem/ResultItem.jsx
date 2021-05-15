import './App.css';
import { useState } from 'react';

function resultItem(props) {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setResult(operand1 + operand2);
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className="operand"
          value="operand1" 
          onChange={e => setOperand1(e.target.value)}
          />

        <input
          className="operand"
          value="operand2"
          onChange={e => setOperand2(e.target.value)}
          />
        <input type="submit" value="=" />
      </form>

    {if (result != null)}

    </div>
  );
}

export default resultItem;

