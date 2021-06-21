import { Grid } from '@material-ui/core';

function ResultList(props) {
  const history = props.history;
  
  if (history == null) {
    return <div/>;
  } else {
    return (
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
        {history.map((result, key) => (
          <Grid key={key} item>
            {result}
          </Grid>
      ))}
      </Grid>
    )
  }

}

export default ResultList;

