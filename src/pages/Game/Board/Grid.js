import styles from './Grid.module.css';
import Card from './Card';

const Grid = (props) => {
  let boardSizeStyle;

  switch (props.boardSize) {
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
    return props.cardHashes.map((hash, index) => <Card key={index} hash={hash} />);
  };

  return <div className={`${styles.Container} ${boardSizeStyle}`}>{generateCards()}</div>;
};

export default Grid;
