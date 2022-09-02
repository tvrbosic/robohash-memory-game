import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './StatusPanel.module.css';
import { gameActions } from '../../../store/game-slice';
import Modal from '../../../components/Modal';
import SuccessModal from './SuccessModal';

const StatusPanel = (props) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const playerMoves = useSelector((state) => state.game.movesCounter);
  const numberOfMatches = useSelector((state) => state.game.matchedCards.length);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const progress = ((numberOfMatches * 2) / props.boardSize) * 100;
  const displaySuccessModal = progress >= 100 ? true : false;

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

  const calculateScore = () => {
    return playerMoves * elapsedTime;
  };

  const successConfirmHandler = () => {
    // Reset game data
    dispatch(gameActions.setPlayer(''));
    dispatch(gameActions.resetMatchedCards());
    dispatch(gameActions.resetMovesCounter());
    // TODO: send result to backend

    navigate('/highscores');
  };

  return (
    <div className={styles.Container}>
      <div>Moves: {playerMoves}</div>
      <div>Elapsed time: {renderTime()}</div>
      <div>Progress: {progress.toFixed(1)}%</div>
      {displaySuccessModal && (
        <Modal>
          <SuccessModal onConfirm={successConfirmHandler} playerScore={calculateScore()}/>
        </Modal>
      )}
    </div>
  );
};

export default StatusPanel;
