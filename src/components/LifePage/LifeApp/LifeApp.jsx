import { useState, useEffect } from 'react';
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



  return (
    <div className="LifeApp">
      <LifeBar dimensions={dimensions} setDimensions={setDimensions} />
      <LifeGrid dimensions={dimensions} life={life} setLife={setLife} />
    </div>
  );
}

export default LifeApp;
