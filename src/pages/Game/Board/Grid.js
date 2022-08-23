import classes from './Grid.module.css';
import Card from './Card';

const Grid = () => {
  const generateCards = () => {
    return [...Array(16)].map((elementInArray, index) => <Card key={index}>Test</Card>);
  };

  return <div className={classes.Container}>{generateCards()}</div>;
};

export default Grid;
