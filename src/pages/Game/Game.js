import styles from './Game.module.css';
import StatusPanel from './StatusPanel';
import Grid from './Board/Grid';
import ControlsPanel from './ControlsPanel';

const Game = () => {
  return (
    <div className={styles.Container}>
      <StatusPanel />
      <div className={styles.Content}>
        <Grid />
        <ControlsPanel />
      </div>
    </div>
  );
};

export default Game;
