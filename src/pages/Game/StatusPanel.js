import styles from './StatusPanel.module.css';

const StatusPanel = (props) => {
  return (
    <div className={styles.Container}>
      <div>Moves: {props.playerMoves}</div>
      <div>Elapsed time: {props.elapsedTime}</div>
      <div>Progress: {props.playerProgress.toFixed(1)}%</div>
    </div>
  );
};

export default StatusPanel;
