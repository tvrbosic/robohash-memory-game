import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styles from './Grid.module.css';
import Card from './Card';
import shuffleArray from '../../../utility/shuffle-array';

const Grid = () => {
  const boardSize = parseInt(useSelector((state) => state.game.cardsCount));

  let boardSizeStyle;
  switch (boardSize) {
    case 16:
      boardSizeStyle = styles['Grid-4x4'];
      break;
    case 24:
      boardSizeStyle = styles['Grid-6x4'];
      break;
    case 36:
      boardSizeStyle = styles['Grid-6x6'];
      break;
    default:
      boardSizeStyle = styles['Grid-4x4'];
  }

  const cardHashesArray = () => {
    const hashes = [];
    // Generate array of boardSize/2 unique hashes
    for (let index = 0; index < boardSize / 2; index++) {
      hashes.push(uuidv4());
    }
    // Create duplicates of those hashes in same array
    hashes.push(...hashes);
    // Shuffle array elements
    shuffleArray(hashes);
    return hashes;
  };
  

  const generateCards = () => {
    return cardHashesArray().map((hash, index) => <Card key={index} hash={hash} />);
  };

  return <div className={`${styles.Container} ${boardSizeStyle}`}>{generateCards()}</div>;
};

export default Grid;
