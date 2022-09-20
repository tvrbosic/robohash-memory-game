import styles from './StatusPanel.module.css';
import ProgressBar from './ProgressBar';

const StatusPanel = (props) => {
  return (
    <div className={styles.Container}>
      <div>
        Moves: <span className={styles.Value}>{props.playerMoves}</span>
      </div>
      <div>
        Elapsed time: <span className={styles.Value}>{props.elapsedTime}</span>
      </div>
      <div className={styles.ProgressContainer}>
        Progress:
        <ProgressBar value={props.playerProgress.toFixed(1)} />
      </div>
    </div>
  );
};

export default StatusPanel;
