import './App.css';
import { useState, useEffect } from 'react';
import ResultList from '../ResultList/ResultList';

function App(props) {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [resultArray, setResultArray] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newResult = Number(operand1) + Number(operand2);
    setResultArray(resultArray => [...resultArray, newResult]);
    axios.post('http://localhost:5000/add-history', newResult)
      .then((res) => {
        console.log(res);
      })
      .catch(error => console.error("Error adding new history."));
  }

  // const changeOperator
  useEffect(() => {
    getHistory();
  }, [])

  const getHistory = () => {
    axios.get('http://localhost:5000/get-history')
      .then((res) => {
        const pastResults = res.data.pastResults;
        setHistory(pastResults);
      })
      .catch(error => console.error("Error getting history."));
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

