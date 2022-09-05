import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styles from './Game.module.css';
import { gameActions } from '../../store/game-slice';
import useHttpRequest from '../../hooks/use-http-request';
import shuffleArray from '../../utility/shuffle-array';
import StatusPanel from './StatusPanel';
import Grid from './Board/Grid';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ExitModal from './ExitModal';
import SuccessModal from './SuccessModal';

const Game = () => {
  const [cardHashes, setCardHashes] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [displayExitModal, setDisplayExitModal] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(true);
  const boardSize = parseInt(useSelector((state) => state.game.cardsCount));
  const player = useSelector((state) => state.game.player);
  const activeCards = useSelector((state) => state.game.activeCards);
  const playerMoves = useSelector((state) => state.game.movesCounter);
  const playerProgress = useSelector((state) => state.game.progress);
  const playerScore = useSelector((state) => state.game.score);
  const { sendRequest } = useHttpRequest();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  // Generate hashes used to create robot images
  useEffect(() => {
    const hashes = [];
    // Generate array of boardSize/2 unique hashes
    for (let index = 0; index < boardSize / 2; index++) {
      hashes.push(uuidv4());
    }
    // Create duplicates hashes in the same array
    hashes.push(...hashes);
    shuffleArray(hashes);
    setCardHashes(hashes);
  }, [boardSize]);

  // Start and stop game time logic
  useEffect(() => {
    let gameTimer;
    if (gameInProgress) {
      gameTimer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(gameTimer);
    }
    // Cleanup function
    return () => {
      clearInterval(gameTimer);
    };
  }, [gameInProgress]);

  // Game progress tracking logic
  useEffect(() => {
    if (playerProgress >= 100) {
      setGameInProgress(false);
    }
  }, [playerProgress]);

  // Track number of active cards, card match comparison, track player moves
  useEffect(() => {
    let cardEffectDelay;
    // If there are two active cards: check match, increase moves counter
    if (activeCards.length === 2) {
      if (activeCards[0] === activeCards[1]) {
        // Cards match
        cardEffectDelay = setTimeout(() => {
          dispatch(gameActions.setMatchedCard(activeCards[0]));
          dispatch(gameActions.resetActiveCards());
          dispatch(gameActions.addScore(elapsedTime));
        }, 1500);
      } else {
        // No match
        cardEffectDelay = setTimeout(() => {
          dispatch(gameActions.resetActiveCards());
        }, 1500);
      }
      // Increase moves counter by one
      dispatch(gameActions.incrementMovesCounter());
    }
    return () => {
      clearTimeout(cardEffectDelay);
    };
  }, [activeCards, dispatch]);

  const renderTime = () => {
    let seconds = ('0' + Math.floor(elapsedTime % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(elapsedTime / 60) % 60)).slice(-2);
    let hours = ('0' + Math.floor(elapsedTime / 3600)).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  const successConfirmHandler = () => {
    // Reset game data
    dispatch(gameActions.setPlayer(''));
    dispatch(gameActions.resetMatchedCards());
    dispatch(gameActions.resetMovesCounter());
    dispatch(gameActions.resetScore());

    let size;
    switch (boardSize) {
      case 16:
        size = 'S';
        break;
      case 24:
        size = 'M';
        break;
      case 36:
        size = 'L';
        break;
      default:
        size = 'S';
        break;
    }
    // Send result to backend
    sendRequest({
      url: 'http://localhost:3001/highscores',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { player: player, score: playerScore, board: size },
    });
    navigate('/highscores');
  };

  const exitClickHandler = () => {
    setDisplayExitModal(true);
  };

  const hideExitModalHandler = () => {
    setDisplayExitModal(false);
  };

  const confirmExitHandler = () => {
    // Reset game data
    dispatch(gameActions.setPlayer(''));
    dispatch(gameActions.resetMatchedCards());
    dispatch(gameActions.resetMovesCounter());
    dispatch(gameActions.resetScore());

    navigate('/');
  };

  return (
    <div className={styles.Container}>
      <StatusPanel
        playerMoves={playerMoves}
        elapsedTime={renderTime()}
        playerProgress={playerProgress}
      />
      <div className={styles.Content}>
        <Grid boardSize={boardSize} cardHashes={cardHashes} />
        <div className={styles.Controls}>
          <Button text='Exit' onClick={exitClickHandler} />
        </div>
      </div>
      {displayExitModal && (
        <Modal onClose={hideExitModalHandler}>
          <ExitModal onConfirm={confirmExitHandler} onClose={hideExitModalHandler} />
        </Modal>
      )}
      {!gameInProgress && (
        <Modal>
          <SuccessModal onConfirm={successConfirmHandler} playerScore={playerScore} />
        </Modal>
      )}
    </div>
  );
};

export default Game;
