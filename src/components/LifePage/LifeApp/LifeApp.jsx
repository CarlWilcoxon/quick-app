import { Grid } from '@material-ui/core';
import LifeRow from '../LifeRow/LifeRow';
import { useState } from 'react';

function LifeApp() {

  const [life, setLife] = useState([
    ['blue', 'blue', 'red', 'blue'],
    ['blue', 'blue', 'red', 'blue'],
    ['blue', 'red', 'red', 'blue'],
    ['blue', 'blue', 'blue', 'blue']
  ]);

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    {life.map((row, key) => (
      <LifeRow key={key} life={row} />
    ))}
  </Grid>

  );
}

export default LifeApp;

