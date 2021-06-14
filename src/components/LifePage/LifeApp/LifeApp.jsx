import { Button, Grid } from '@material-ui/core';
import LifeSquare from '../LifeSquare/LifeSquare';

import { useCallback, useState } from 'react';

function LifeApp() {

  const [life, setLife] = useState([
    [false, false, true, false],
    [false, false, true, false],
    [false, true, true, false],
    [false, false, false, false]
  ]);

  // const toggleClick = (x, y) => {
  //   let copy = [...life];
  //   copy[x][y] = !copy[x][y];
  //   setLife(copy);
  //   console.log(life);
  // }


  //useCallback should speed up response time
  const toggleClick = useCallback(
    (x, y) => {
      setLife(life => {
        let copy = [...life];
        copy[x][y] = !copy[x][y];
        return copy;
      });
    },
    [setLife]
  );
  


  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    {life.map((thisRow, rowNumber) => (
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      toggleClick={toggleClick}
    >

      {thisRow.map((alive, colNumber) => (
        <LifeSquare
        colNumber={colNumber}
        rowNumber={rowNumber}
        alive={alive}
        toggleClick={toggleClick}/>

      ))}

    </Grid>
    
    ))}
  </Grid>

  );
}

export default LifeApp;

