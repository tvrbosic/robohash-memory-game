import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Card.module.css';
import { gameActions } from '../../../store/game-slice';

const Card = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const activeCardsCount = useSelector((state) => state.game.activeCards.length);
  const matchedCards = useSelector((state) => state.game.matchedCards);

  const dispatch = useDispatch();


  useEffect(() => {
    // After two cards have been selected activeCardsCount has been reset
    if (activeCardsCount === 0) {
      // Check if card was matched
      if (matchedCards.find((hash) => hash === props.hash)) {
        // Match
        setIsMatched(true);
      } else {
        // No match, return active cards to inital state
        if (isActive) {
          setIsActive(false);
        }
      }
    }
  }, [activeCardsCount, isActive, matchedCards, props.hash]);


  const cardClickHandler = () => {
    // Enable click only if less than two cards are active
    if (activeCardsCount < 2) {
      setIsActive((previousIsActive) => {
        return !previousIsActive;
      });
      dispatch(gameActions.addActiveCard(props.hash));
    }
  };

  const cardStyles = isMatched ? `${styles.Card} ${styles.Matched}` : `${styles.Card}`;
  const cardContentStyles = isActive ? `${styles.Content}  ${styles.Active}` : `${styles.Content}`;

  return (
    <div className={cardStyles} onClick={cardClickHandler}>
      <div className={cardContentStyles}>
        <div className={styles.Front}></div>
        <div className={styles.Back}>
          <img
            src={`https://robohash.org/${props.hash}.png?size=200x200`}
            className={styles.Image}
            alt={`Card hash: ${props.hash}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
