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

        <Button
        component="Grid"
        variant="contained"
        color="secondary"
        onClick= {() => toggleClick( rowNumber, colNumber )}
        >
          X
        </Button>
      }
    </>
  )
}
//   if (props.alive) {
//     return (
//       <Button
//       component="Grid"
//       variant="contained"
//       color="primary"
//       onClick= {() => toggleClick( colNumber, rowNumber )}
//       >
//         O
//       </Button>  
//     )
//   } else {
//     return (
//       <Button
//       component="Grid"
//       variant="contained"
//       color="secondary"
//       onClick= {() => toggleClick( colNumber, rowNumber )}
//       >
//         X
//       </Button>  
//     )
//   }
// }

export default LifeSquare;

