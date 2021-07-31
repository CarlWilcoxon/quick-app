import { Button } from '@material-ui/core';

function LifeSquare(props) {

  const {alive, colNumber, rowNumber, toggleClick } = props;

  return (
    <>
      { alive ? 

        <Button
        component="Grid"
        variant="contained"
        color="primary"
        onClick= {() => toggleClick( rowNumber, colNumber )}
        >
          O
        </Button>  

        :

        <img
          src="public/images/back"
          alt="bob"
          width="100"
          onClick= {() => toggleClick( rowNumber, colNumber )}
        />
      }
    </>
  )
}

export default LifeSquare;

