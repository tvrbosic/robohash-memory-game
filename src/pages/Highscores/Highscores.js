import { useNavigate } from 'react-router-dom';

import styles from './Highscores.module.css';
import Button from '../../components/Button';

const samplePlayerScores = [
  { id: 1, username: 'Player1', score: 375 },
  { id: 2, username: 'Player2', score: 420 },
  { id: 3, username: 'Player3', score: 149 },
  { id: 4, username: 'Player4', score: 224 },
  { id: 5, username: 'Player5', score: 114 },
];

const Highscores = () => {
  let navigate = useNavigate();

  const returnClickHandler = () => {
    navigate('/');
  };

  const sortedPlayerScores = (playerScores) => {
    return playerScores.sort((a, b) => {
      return b.score - a.score;
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h1 className={styles.Heading}>Highscores</h1>
        <p className={styles.Description}>Describe how is player score calculated.</p>
        <div className={styles.ScoresTable}>
          <div className={styles.TableHeader}>
            <div className={styles.LeftColumn}>Position</div>
            <div className={styles.CenterColumn}>Player</div>
            <div className={styles.RightColumn}>Score</div>
          </div>
          {sortedPlayerScores(samplePlayerScores).map((item, index) => {
            return (
              <div className={styles.TableItem}>
                <div className={styles.LeftColumn}>{index + 1}</div>
                <div className={styles.CenterColumn}>{item.username}</div>
                <div className={styles.RightColumn}>{item.score}</div>
              </div>
            );
          })}
          <div className={styles.ButtonsPanel}>
            <Button text='Return to menu' onClick={returnClickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highscores;
