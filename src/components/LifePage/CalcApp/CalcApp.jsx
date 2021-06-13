import './CalcApp.css';
import { useState, useEffect } from 'react';
import ResultList from '../ResultList/ResultList';
import { Button, Grid, TextField } from '@material-ui/core';
import NumPad from '../LifeGrid/LifeGrid';
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

        <NumPad/>

        <Grid item>
          <ResultList resultArray={resultArray} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CalcApp;

