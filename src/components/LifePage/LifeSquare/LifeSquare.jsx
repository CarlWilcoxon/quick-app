import { Button } from '@material-ui/core';

function LifeSquare(props) {
  if (props.square === 'red') {
    return (
      <Button
      component="Grid"
      variant="contained"
      color="secondary"
      >
        X
      </Button>  
    )
  } else if (props.square === 'blue') {
    return (
      <Button
      component="Grid"
      variant="contained"
      color="primary"
      >
        O
      </Button>  
    )
  }
}

export default LifeSquare;

