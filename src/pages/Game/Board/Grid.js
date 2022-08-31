import { useSelector } from 'react-redux';

import styles from './Grid.module.css';
import Card from './Card';

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

  const generateCards = () => {
    return [...Array(boardSize)].map((elementInArray, index) => <Card key={index}>Test</Card>);
  };

  return <div className={`${styles.Container} ${boardSizeStyle}`}>{generateCards()}</div>;
};

export default Grid;
