import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './StatusPanel.module.css';
import { gameActions } from '../../../store/game-slice';
import useHttpRequest from '../../../hooks/use-http-request';
import Modal from '../../../components/Modal';
import SuccessModal from './SuccessModal';

const StatusPanel = (props) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(true);
  const player = useSelector((state) => state.game.player);
  const playerMoves = useSelector((state) => state.game.movesCounter);
  const playerProgress = useSelector((state) => state.game.progress);

  const dispatch = useDispatch();
  const { sendRequest } = useHttpRequest(); // Extract and handle isLoading & error
  let navigate = useNavigate();

  useEffect(() => {
    let gameTimer;
    if (gameInProgress) {
      gameTimer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(gameTimer);
    }

    return () => {
      clearInterval(gameTimer);
    };
  }, [gameInProgress]);

  useEffect(() => {
    if (playerProgress >= 100) {
      setGameInProgress(false);
    }
  }, [playerProgress]);

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

    let boardSize;
    switch (props.boardSize) {
      case 16:
        boardSize = 'S';
        break;
      case 24:
        boardSize = 'M';
        break;
      case 36:
        boardSize = 'L';
        break;
      default:
        boardSize = 'S';
        break;
    }
    // Send result to backend
    sendRequest({
      url: 'http://localhost:3001/highscores',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { player: player, score: calculateScore(), board: boardSize },
    });
    navigate('/highscores');
  };

  return (
    <div className={styles.Container}>
      <div>Moves: {playerMoves}</div>
      <div>Elapsed time: {renderTime()}</div>
      <div>Progress: {playerProgress.toFixed(1)}%</div>
      {!gameInProgress && (
        <Modal>
          <SuccessModal onConfirm={successConfirmHandler} playerScore={calculateScore()} />
        </Modal>
      )}
    </div>
  );
};

export default StatusPanel;
