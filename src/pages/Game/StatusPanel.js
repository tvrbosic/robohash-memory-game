import styles from './StatusPanel.module.css';

const StatusPanel = (props) => {
  return (
    <div className={styles.Container}>
      <div>
        Moves: <span className={styles.Value}>{props.playerMoves}</span>
      </div>
      <div>
        Elapsed time: <span className={styles.Value}>{props.elapsedTime}</span>
      </div>
      <div>
        Progress:{' '}
        <span className={styles.Value}>{props.playerProgress.toFixed(1)}%</span>
      </div>
    </div>
  );
};

export default StatusPanel;
