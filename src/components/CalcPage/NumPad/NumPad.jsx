import { Button, Grid, TextField } from '@material-ui/core';
import { useState } from 'react';



function NumPad() {
  // const resultArray = props.resultArray;
  const [display, setDisplay] = useState( '0' );
  const [operator, setOperator] = useState( '' );


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
          type="number"
          value={display}
        />
        <Grid
          container
          id="row1"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button>??</Button>
          <Button>Ans</Button>  
          <Button onClick={() => {
            setDisplay('0');
            setOperator('');
            }}>C</Button>  
          <Button onClick={ ()=>setOperator('/') }>/</Button>
        
        
        </Grid>
        <Grid
          container
          id="row2"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button onClick={ ()=>setDisplay(display + '7') }>7</Button>
          <Button onClick={ ()=>setDisplay(display + '8') }>8</Button>
          <Button onClick={ ()=>setDisplay(display + '9') }>9</Button>
          <Button onClick={ ()=>setOperator('*') }>*</Button>
        </Grid>
        <Grid
          container
          id="row3"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button onClick={ ()=>setOperator('-') }>-</Button>
        </Grid>
        <Grid
          container
          id="row4"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button onClick={ ()=>setOperator('+') }>+</Button>
        </Grid>
        <Grid
          container
          id="row5"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button>0</Button>
          <Button>.</Button>
          <Button>(-/+)</Button>
          <Button>=</Button>
        </Grid>
      </Grid>
    )
  }

export default NumPad;

