import { Grid } from '@material-ui/core';
import LifeSquare from '../LifeSquare/LifeSquare';

// import { useCallback, useState } from 'react';

function LifeGrid(props) {

  const { life, toggleClick } = props;

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    {life.map((thisRow, rowIndex) => (
      <Grid
      container
      key={rowIndex}
      direction="row"
      justify="center"
      alignItems="center"
      toggleClick={toggleClick}
    >

      {thisRow.map((alive, colIndex) => (
        <LifeSquare
        key={colIndex}
        colNumber={colIndex}
        rowNumber={rowIndex}
        alive={alive}
        toggleClick={toggleClick}/>

      ))}

    </Grid>
    
    ))}
  </Grid>

  );
}

export default LifeGrid;

