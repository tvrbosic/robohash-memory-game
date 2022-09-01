import { useSelector } from 'react-redux';

import styles from './StatusPanel.module.css';

const StatusPanel = (props) => {
  const playerMoves = useSelector((state) => state.game.movesCounter);
  const numberOfMatches = useSelector((state) => state.game.matchedCards.length);

  const progress = ((numberOfMatches*2) / props.boardSize)*100

  return (
    <div className={styles.Container}>
      <div className={styles.PanelItem}>Moves: {playerMoves}</div>
      <div className={styles.PanelItem}>Elapsed time: 00:00:00</div>
      <div className={styles.PanelItem}>Progress: {progress.toFixed(1)}%</div>
    </div>
  );
};

export default StatusPanel;
