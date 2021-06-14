import { useState, useEffect, useCallback } from 'react';
import LifeGrid from '../LifeGrid/LifeGrid';
import LifeBar from '../LifeBar/LifeBar';

function LifeApp() {

  const [dimensions, setDimensions] = useState({
    rows: 5,
    columns: 5,
  });

  const [running, setRunning] = useState(false);
  const [pausing, setPausing] = useState(false);

  const [life, setLife] = useState(
    Array.from({ length: dimensions.rows }, v => Array.from({ length: dimensions.columns }, v => false))
  );

  useEffect(()=> {
    setLife(
      Array.from({ length: dimensions.rows }, v => Array.from({ length: dimensions.columns }, v => false))
    );
  }, [dimensions]);

  const toggleClick = useCallback(
    (x, y) => {
      if (!running) {
        setLife( life => {
          let copy = [...life];
          copy[x][y] = !copy[x][y];
          return copy;
        });
    }},
    [running, setLife]
  );

  // const randomize = useCallback(
  //   () => {
  //     setLife( life => {
  //       let copy = [...life];
  //       //randomize each cell to true or false here
  //       return copy;
  //     })
  //   },
  //   [setLife]
  // )

  // Logic to find the nextgen layout
  const nextGen = () => {
    let copy = [...life];
    
    for (let x = 1 ; x < dimensions.rows; x++) {
      for (let y = 1; y < dimensions.columns; y++) {
      
        let count = 0;
        let alive = life[x][y];

        //row above target
        if (life[x-1][y-1]) {
          count++;
        } if (life[x][y-1]) {
          count++;
        } if (life[x+1][y-1]) {
          count++;
        }

        //target row
        if (life[x-1][y]) {
          count++;
        } if (life[x][y]) {
          count++;
        } if (life[x+1][y]) {
          count++;
        }

        //row below target
        if (life[x-1][y+1]) {
          count++;
        } if (life[x][y+1]) {
          count++;
        } if (life[x+1][y+1]) {
          count++;
        }

        // Any live cell with two or three live neighbours survives.
        // Any dead cell with three live neighbours becomes a live cell.
        // All other live cells die in the next generation. Similarly, all other dead cells stay dead.

        if ( alive && count > 1 && count < 4 ) {
          copy[x][y]= true;
        } else if ( !alive && count===3 ){
          copy[x][y]= true;
        } else {
          copy[x][y]= false;
        }
      }
    }
  };


  return (
    <div className="LifeApp">
      <LifeBar
        dimensions={dimensions}
        pausing={pausing}
        running={running}
        setDimensions={setDimensions} 
        setRunning={setRunning} />
      <LifeGrid
        dimensions={dimensions}
        life={life}
        setLife={setLife}
      toggleClick={toggleClick} />
    </div>
  );
}

export default LifeApp;
