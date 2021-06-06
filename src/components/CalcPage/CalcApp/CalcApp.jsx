import './CalcApp.css';
import { useState, useEffect } from 'react';
import ResultList from '../ResultList/ResultList';
import { Button, Grid, TextField } from '@material-ui/core';
const axios = require('axios');

function CalcApp(props) {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [resultArray, setResultArray] = useState([]);
  const [history, setHistory] = useState([]);

  //handle sending the new result to the server
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newResult = Number(operand1) + Number(operand2);
    setResultArray(resultArray => [newResult, ...resultArray]);

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
    axios.get('http://localhost:5000/load-history')
      .then((res) => {
        const pastResults = res.data.pastResults;
        setHistory(pastResults);
      })
      .catch(error => console.error("Error getting history."));
  }

  return (
    <div className="CalcApp">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        <Grid item>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="operand"
              type="number"
              value={operand1}
              onChange={e => setOperand1(e.target.value)}
              />

            <TextField
              id="outlined-basic"
              variant="outlined"
              className="operand"
              type="number"
              value={operand2}
              onChange={e => setOperand2(e.target.value)}
              />
            <Button onClick={handleSubmit} variant="contained" color="primary">{"="}</Button>
          </form>
        </Grid>

        <Grid item>
          <ResultList resultArray={resultArray} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CalcApp;

