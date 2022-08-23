import classes from './Game.module.css';
import StatusPanel from './StatusPanel';
import Grid from './Board/Grid';
import ControlsPanel from './ControlsPanel';

const Game = () => {
  return (
    <div>
      <StatusPanel />
      <Grid />
      <ControlsPanel />
    </div>
  );
};

export default Game;
