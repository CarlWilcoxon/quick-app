import './CalcApp.css';
import { useState, useEffect } from 'react';
import ResultList from '../ResultList/ResultList';
import { Grid } from '@material-ui/core';
import NumPad from '../NumPad/NumPad';
const axios = require('axios');

function CalcApp(props) {
  const [history, setHistory] = useState([]);

  //handle sending the new result to the server
  const addResult = (ans) => {
    let newResult = ans;

    axios.post('http://localhost:5000/add-history', newResult)
      .then((res) => {
        console.log(res);
        getHistory();
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

        <NumPad addResult={addResult} />

        <Grid item>
          <ResultList history={history} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CalcApp;

