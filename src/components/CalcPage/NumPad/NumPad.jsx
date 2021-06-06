import ResultItem from '../ResultItem/ResultItem';
import { Grid } from '@material-ui/core';
import { Button as Btn } from '@material-ui/core';


function NumPad(props) {
  const resultArray = props.resultArray;
  

    return (
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
      
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Btn>??</Btn>  <Btn>Ans</Btn>  <Btn>C</Btn>  <Btn>/</Btn>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Btn>7</Btn>  <Btn>8</Btn>  <Btn>9</Btn>  <Btn>*</Btn>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Btn>4</Btn>  <Btn>5</Btn>  <Btn>6</Btn>  <Btn>-</Btn>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Btn>1</Btn>  <Btn>2</Btn>  <Btn>3</Btn>  <Btn>+</Btn>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Btn>0</Btn>  <Btn>.</Btn>  <Btn>(-/+)</Btn>  <Btn>=</Btn>
        </Grid>
        {/* TODO Connect the numpad to reducers */}
        {/* TODO Connect the equals button to sagas */}
      </Grid>
    )
  }

export default NumPad;

