import './CalcApp.css';
import { useState, useEffect } from 'react';
import ResultList from '../ResultList/ResultList';
import { Grid } from '@material-ui/core';
import NumPad from '../NumPad/NumPad';
import axios from 'axios';

function CalcApp(props) {
  const [history, setHistory] = useState([0,10,20]);
  const [display, setDisplay] = useState( '0' );
  const [operator, setOperator] = useState();
  const [num1, setNum1] = useState( '0' );
  const [ans, setAns] = useState( '0' );

  const calculate = () => {
    let num2 = display;
    let result = 0;
    if(operator){
      if(operator==='+') {
        result = (String(Number(num1) + Number(num2)));
        console.log('Added');
      }
      if(operator==='-') {
        result = (String(Number(num1) - Number(num2)));
        console.log('Subtracted');
      }
      if(operator==='/') {
        result = (String(Number(num1) / Number(num2)));
        console.log('Divided');
      }
      if(operator==='*') {
        result = (String(Number(num1) * Number(num2)));
        console.log('Multiplied');
      }
      console.log('Equal button pressed.');
      setDisplay(result);
      setAns(result);
    }};

  //send the new result to the server
  useEffect( ()=> {
    let newResult = {newEntry: ans};
    axios.post('http://localhost:5000/api/history/add-history', newResult)
      .then((res) => {
        // console.log(res);
        getHistory();
      })
      .catch(error => console.error("Error adding new history."));
  }, [ans])

  // const addResult = (ans) => {
  //   let newResult = {'newEntry': ans};

  //   axios.post('http://localhost:5000/api/history/add-history', newResult)
  //     .then((res) => {
  //       console.log(res);
  //       getHistory();
  //     })
  //     .catch(error => console.error("Error adding new history."));
  // }

  // const changeOperator
  useEffect(() => {
    getHistory();
  }, [])

  // get an array that contains the previous results from the calc
  const getHistory = () => {
    axios.get('http://localhost:5000/api/history/load-history')
      .then((res) => {
        const pastResults = res.data.history;
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

        <NumPad
        display={display}
        setDisplay={setDisplay}
        setOperator={setOperator}
        num1={num1}
        setNum1={setNum1}
        setAns={setAns}
        calculate={calculate} />

        <Grid item>
          <ResultList history={history} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CalcApp;
