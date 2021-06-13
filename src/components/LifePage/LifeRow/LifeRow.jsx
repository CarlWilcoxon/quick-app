import { Grid } from '@material-ui/core';
import LifeSquare from '../LifeSquare/LifeSquare';

function LifeRow(props) {
  const thisRow = props.life;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {thisRow.map((item, key) => (
          <LifeSquare key={key} square={item} />
        ))}
      </Grid>
    )
  }

export default LifeRow;

