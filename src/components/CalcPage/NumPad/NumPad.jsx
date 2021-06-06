import ResultItem from '../ResultItem/ResultItem';
import { Grid } from '@material-ui/core';

function NumPad(props) {
  const resultArray = props.resultArray;
  

    return (
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
        {/* TODO Render a Grid that looks like a calculator */}
        {/* TODO Connect the numpad to reducers */}
        {/* TODO Connect the equals button to sagas */}
      </Grid>
    )
  }

}

export default NumPad;

