import { useSelector } from 'react-redux';

import styles from './StatusPanel.module.css';

const StatusPanel = () => {
  const playerMoves = useSelector((state) => state.game.movesCounter);
  return (
    <div className={styles.Container}>
      <div className={styles.PanelItem}>Moves: {playerMoves}</div>
      <div className={styles.PanelItem}>Elapsed time: 00:00:00</div>
      <div className={styles.PanelItem}>Progress: 100%</div>
    </div>
  );
};

export default StatusPanel;
