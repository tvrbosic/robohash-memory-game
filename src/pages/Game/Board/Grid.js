import { useSelector } from 'react-redux';

import styles from './Grid.module.css';
import Card from './Card';

const Grid = () => {
  const boardSize = useSelector((state) => state.game.cardsCount);
  const generateCards = () => {
    return [...Array(parseInt(boardSize))].map((elementInArray, index) => <Card key={index}>Test</Card>);
  };

  return <div className={styles.Container}>{generateCards()}</div>;
};

export default Grid;
