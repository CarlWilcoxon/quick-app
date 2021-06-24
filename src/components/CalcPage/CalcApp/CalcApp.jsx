import './CalcApp.css';
import { useState, useEffect } from 'react';
import ResultList from '../ResultList/ResultList';
import { Grid } from '@material-ui/core';
import NumPad from '../NumPad/NumPad';
import axios from 'axios';

function CalcApp(props) {
  const [history, setHistory] = useState([]);
  const [display, setDisplay] = useState( '0' );
  const [operator, setOperator] = useState();
  const [num1, setNum1] = useState();
  const [ans, setAns] = useState();

  const calculate =  () => {
    if(operator){
      if(operator==='+') {
        setDisplay(String(Number(num1) + Number(display)));
        console.log('Added');
      }
      if(operator==='-') {
        setDisplay(String(Number(num1) - Number(display)));
        console.log('Subtracted');
      }
      if(operator==='/') {
        setDisplay(String(Number(num1) / Number(display)));
        console.log('Divided');
      }
      if(operator==='*') {
        setDisplay(String(Number(num1) * Number(display)));
        console.log('Multiplied');
      }
      console.log('Equal button pressed.');
      setAns(display);
    }};

  //send the new result to the server
  useEffect(()=> {
    let newResult = {'newEntry': ans};
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

