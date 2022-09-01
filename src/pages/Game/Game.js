import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styles from './Game.module.css';
import { gameActions } from '../../store/game-slice';
import shuffleArray from '../../utility/shuffle-array';
import StatusPanel from './StatusPanel';
import Grid from './Board/Grid';
import ControlsPanel from './ControlsPanel';

const Game = () => {
  const [cardHashes, setCardHashes] = useState([]);
  const boardSize = parseInt(useSelector((state) => state.game.cardsCount));
  const activeCards = useSelector((state) => state.game.activeCards);

  const dispatch = useDispatch();

  useEffect(() => {
    const hashes = [];
    // Generate array of boardSize/2 unique hashes
    for (let index = 0; index < boardSize / 2; index++) {
      hashes.push(uuidv4());
    }
    // Create duplicates of those hashes in same array
    hashes.push(...hashes);
    // Shuffle array elements
    shuffleArray(hashes);
    setCardHashes(hashes);
  }, [boardSize]);


  useEffect(() => {
    let cardEffectDelay;
    // Check match if there are two active cards
    if (activeCards.length === 2) {
      if (activeCards[0] === activeCards[1]) {
        // Cards match
        cardEffectDelay = setTimeout(() => {
          dispatch(gameActions.setMatchedCard(activeCards[0]));
          dispatch(gameActions.resetActiveCards());
        }, 1500);
      } else {
        // No match
        cardEffectDelay = setTimeout(() => {
          dispatch(gameActions.resetActiveCards());
        }, 1500);
      }
    }
    return () => {
      clearTimeout(cardEffectDelay);
    };
  }, [activeCards, dispatch]);

  return (
    <div className={styles.Container}>
      <StatusPanel />
      <div className={styles.Content}>
        <Grid boardSize={boardSize} cardHashes={cardHashes} />
        <ControlsPanel />
      </div>
    </div>
  );
};

export default Game;
