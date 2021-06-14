import { Grid } from '@material-ui/core';
import LifeSquare from '../LifeSquare/LifeSquare';

// import { useCallback, useState } from 'react';

function LifeGrid(props) {

  const { life, toggleClick} = props;

  
  // const [life, setLife] = useState([
  //   [false, false, true, false, true],
  //   [false, false, true, false, false],
  //   [false, true, true, false, false],
  //   [false, false, false, false, false],
  //   [true, false, false, true, false]
  // ]);

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
      direction="row"
      justify="center"
      alignItems="center"
      toggleClick={toggleClick}
    >

      {thisRow.map((alive, colIndex) => (
        <LifeSquare
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

