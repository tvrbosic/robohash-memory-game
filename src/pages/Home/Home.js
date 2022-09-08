import styles from './Home.module.css';
import GameMenu from './GameMenu';

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h1 className={styles.Heading}>RoboHash Memory</h1>
        <p className={styles.Description}>Memory game which generates cards using RoboHash Web Service.</p>
        <GameMenu />
      </div>
    </div>
  );
};

export default Home;
