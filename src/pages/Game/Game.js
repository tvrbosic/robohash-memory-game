import classes from './Game.module.css';
import StatusPanel from './StatusPanel';
import Grid from './Board/Grid';
import ControlsPanel from './ControlsPanel';

const Game = () => {
  return (
    <div className={classes.Container}>
      <StatusPanel />
      <div className={classes.Content}>
        <Grid />
        <ControlsPanel />
      </div>
    </div>
  );
};

export default Game;
