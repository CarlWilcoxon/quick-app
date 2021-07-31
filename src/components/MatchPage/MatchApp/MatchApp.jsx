import { useState, useEffect, useCallback } from 'react';
import MatchGrid from '../MatchGrid/MatchGrid';
import MatchBar from '../MatchBar/MatchBar';

function MatchApp() {

  const [dimensions, setDimensions] = useState({
    rows: 4,
    columns: 4,
  });

  const [running, setRunning] = useState(false);

  const [life, setLife] = useState(
    Array.from({ length: dimensions.rows }, v => Array.from({ length: dimensions.columns }, v => false))
  );

  const toggleClick = useCallback(
    (x, y) => {
      if (!running) {
        setLife( life => {
          let copy = [...life];
          copy[x][y] = !copy[x][y];
          return copy;
        });
    }}, [running]
  )

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
  const nextGen = useCallback(()=> {
      let copy = Array.from({ length: dimensions.rows }, v => Array.from({ length: dimensions.columns }, v => false));
      
      // loop through all squares... edges stay the same
      for (let x = 1 ; x < dimensions.rows - 1; x++) {
        for (let y = 1; y < dimensions.columns - 1; y++) {
        
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

          //target row (skip the target square)
          if (life[x-1][y]) {
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

          if ( (alive && ( 2 === count || count === 3 )) || (!alive && count === 3) ) {
            copy[x][y]= true;
          } else {
            copy[x][y]= false;
          } 
        }
      }
      return copy;
    }, [dimensions.columns, dimensions.rows, life]);

  useEffect(()=> {
    setLife(
      Array.from({ length: dimensions.rows }, v => Array.from({ length: dimensions.columns }, v => false))
    );
  }, [dimensions]);


  useEffect(()=> {
    if(running) {
      setTimeout(()=> {
        setLife( nextGen() );
      }, 330);
    }
  }, [nextGen, running]);


  return (
    <div className="LifeApp">
      
      <MatchBar
        dimensions={dimensions}
        running={running}
        setDimensions={setDimensions} 
        setRunning={setRunning}
        nextGen={nextGen}
        setLife={setLife} />
      
      <MatchGrid
        dimensions={dimensions}
        life={life}
        setLife={setLife}
        toggleClick={toggleClick} />

    </div>
  );
}

export default MatchApp;
