import classes from './Home.module.css';
import GameMenu from './GameMenu';

const Home = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <h1 className={classes.Heading}>RoboHash Memory</h1>
        <p className={classes.Description}>Memory game which generates cards using RoboHash API.</p>
        <GameMenu />
      </div>
    </div>
  );
};

export default Home;
