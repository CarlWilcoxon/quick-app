import { useState, useEffect, useCallback } from 'react';
import LifeGrid from '../LifeGrid/LifeGrid';
import LifeBar from '../LifeBar/LifeBar';

function LifeApp() {

  const [dimensions, setDimensions] = useState({
    rows: 5,
    columns: 5,
  });
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
      setLife( life => {
        let copy = [...life];
        copy[x][y] = !copy[x][y];
        return copy;
      });
    },
    [setLife]
  );

  // const randomize = useCallback(
  //   () => {
  //     setLife( life => {
  //       let copy = [...life];
  //       //randomize each cell to true or false here
  //       return copy;
  //     })
  //   }
  // )


  return (
    <div className="LifeApp">
      <LifeBar dimensions={dimensions} setDimensions={setDimensions} />
      <LifeGrid
      dimensions={dimensions}
      life={life}
      setLife={setLife}
      toggleClick={toggleClick} />
    </div>
  );
}

export default LifeApp;
