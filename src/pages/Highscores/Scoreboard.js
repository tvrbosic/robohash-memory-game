import styles from './Scoreboard.module.css';
import Button from '../../components/Button';

const Scoreboard = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.LeftColumn}>Position</div>
        <div className={styles.CenterColumn}>Player</div>
        <div className={styles.RightColumn}>Score</div>
      </div>
      {props.playerHighscores.map((item, index) => {
        return (
          <div className={styles.Item} key={index}>
            <div className={styles.LeftColumn}>{index + 1}</div>
            <div className={styles.CenterColumn}>{item.player}</div>
            <div className={styles.RightColumn}>{item.score}</div>
          </div>
        );
      })}
      <div className={styles.ButtonsPanel}>
        <Button text='Return to menu' onClick={props.onReturnClick} />
      </div>
    </div>
  );
};

export default Scoreboard;
