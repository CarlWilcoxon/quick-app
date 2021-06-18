import { Grid } from '@material-ui/core';
import MatchCard from '../MatchCard/MatchCard';

// import { useCallback, useState } from 'react';

function MatchGrid(props) {

  const { life, toggleClick} = props;

  
  // const toggleClick = (x, y) => {
  //   let copy = [...life];
  //   copy[x][y] = !copy[x][y];
  //   setLife(copy);
  //   console.log(life);
  // }

  


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
        <MatchCard
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

export default MatchGrid;

