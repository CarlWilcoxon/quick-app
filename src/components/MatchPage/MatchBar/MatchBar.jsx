import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, InputLabel, Select, Toolbar, Typography }from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

function MatchBar(props) {
  const classes = useStyles();
  const {dimensions, running, setDimensions, setRunning} = props;
  
  const handleChange = (event) => {
    const name = event.target.name;
    setDimensions({
      ...dimensions,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Game of Life
          </Typography>
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="rows-native-simple">Rows</InputLabel>
            <Select
              native
              value={dimensions.rows}
              onChange={handleChange}
              inputProps={{
                name: 'rows',
                id: 'rows-native-simple',
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="columns-native-simple">Columns</InputLabel>
            <Select
              native
              value={dimensions.columns}
              onChange={handleChange}
              inputProps={{
                name: 'columns',
                id: 'columns-native-simple',
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </Select>
          </FormControl>
          <Button
            variant='contained'
            color='secondary'
            onClick={()=> {setDimensions({
              rows: 20,
              columns: 20,
          })}}>
            Reset
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={()=> setRunning(!running) }
          >
            {running ? "Pause" : "Start!"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default MatchBar;