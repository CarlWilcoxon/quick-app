import { Grid } from '@material-ui/core';
import { useState } from 'react';
import LifeSquare from '../LifeSquare/LifeSquare';

function LifeRow() {
  const [life, setLife] = useState(['blue', 'blue', 'red', 'blue']);

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      {life.map((item, key) => (
        <LifeSquare key={key} square={item} />
      ))}
      </Grid>
    )
  }

export default LifeRow;

