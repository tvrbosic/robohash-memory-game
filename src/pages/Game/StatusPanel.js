import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './StatusPanel.module.css';

const StatusPanel = (props) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const playerMoves = useSelector((state) => state.game.movesCounter);
  const numberOfMatches = useSelector((state) => state.game.matchedCards.length);

  const progress = ((numberOfMatches * 2) / props.boardSize) * 100;

  useEffect(() => {
    let gameTimer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(gameTimer);
    };
  }, []);

  const renderTime = () => {
    let seconds = ('0' + Math.floor(elapsedTime % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(elapsedTime / 60) % 60)).slice(-2);
    let hours = ('0' + Math.floor(elapsedTime / 3600)).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={styles.Container}>
      <div className={styles.PanelItem}>Moves: {playerMoves}</div>
      <div className={styles.PanelItem}>Elapsed time: {renderTime()}</div>
      <div className={styles.PanelItem}>Progress: {progress.toFixed(1)}%</div>
    </div>
  );
};

export default StatusPanel;
