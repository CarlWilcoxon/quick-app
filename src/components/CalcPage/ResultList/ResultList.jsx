import ResultItem from '../ResultItem/ResultItem';
import { Grid } from '@material-ui/core';

function ResultList(props) {
  const resultArray = props.resultArray;
  
  if (resultArray == null) {
    return <div/>;
  } else {
    return (
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
        {resultArray.map((result, key) => (
          <Grid item>
            <ResultItem key={key} item={result} />
          </Grid>
      ))}
      </Grid>
    )
  }

}

export default ResultList;

