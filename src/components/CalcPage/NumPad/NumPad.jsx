import { Button, Grid, TextField } from '@material-ui/core';
import { useState } from 'react';

//TODO: fix typing numbers after pressing equal bug.

function NumPad() {
  // const resultArray = props.resultArray;
  const [display, setDisplay] = useState( '0' );
  const [operator, setOperator] = useState();
  const [num1, setnum1] = useState();
  const [ans, setAns] = useState();


    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <TextField
          id="display"
          variant="outlined"
          value={display}
        />
        <Grid
          container
          id="row1"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
          >??</Button>
          <Button 
            variant="contained"
            onClick={() => ans ? setDisplay(ans) : null }
            >Ans</Button>  
          <Button 
            variant="contained"
            onClick={() => {
              setDisplay('0');
              setOperator();
              setnum1();
              setAns();
              }}>C</Button>

          <Button 
            variant="contained"
            color="secondary"
            onClick={ () => {
              setOperator('/');
              if(!num1) {
                setnum1(display);
                setDisplay('0');
              }}}>/</Button>
        
        
        </Grid>
        <Grid
          container
          id="row2"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('7'): setDisplay(display + '7') }
          >7</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('8'): setDisplay(display + '8') }
            >8</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('9'): setDisplay(display + '9') }
            >9</Button>
          <Button
            variant="contained"
            color="secondary" 
            onClick={ () => {
              setOperator('*');
              if(!num1) {
                setnum1(display);
                setDisplay('0');
              }}}>*</Button>
        </Grid>
        <Grid
          container
          id="row3"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('4'): setDisplay(display + '4') }
            >4</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('5'): setDisplay(display + '5') }
            >5</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('6'): setDisplay(display + '6') }
            >6</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={ () => {
              setOperator('-');
              if(!num1) {
                setnum1(display);
                setDisplay('0');
              }}}>-</Button>
        </Grid>
        <Grid
          container
          id="row4"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('1'): setDisplay(display + '1') }
            >1</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('2'): setDisplay(display + '2') }
            >2</Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('3'): setDisplay(display + '3') }
            >3</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={ () => {
              setOperator('+');
              if(!num1) {
                setnum1(display);
                setDisplay('0');
              }}}>+</Button>
        </Grid>
        <Grid
          container
          id="row5"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button 
            variant="contained"
            color="primary"
            onClick={ () => display==='0' ? setDisplay('0'): setDisplay(display + '0') }
            >0</Button>
          <Button 
            variant="contained"
            onClick={ () => display.includes('.') ? console.log('second decimal') : setDisplay(display + '.') }
            >.</Button>
          <Button 
            variant="contained"
            onClick={ () => display.includes('-') ? setDisplay(display.slice(1)) : setDisplay('-' + display) }
            >(-/+)</Button>
          <Button 
            variant="contained"
            color="secondary"
            onClick={ () => {
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
              }}}>=</Button>
        </Grid>
      </Grid>
    )
  }

export default NumPad;

