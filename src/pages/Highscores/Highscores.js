import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import styles from './Highscores.module.css';
import Button from '../../components/Button';
import useHttpRequest from '../../hooks/use-http-request';

const spinnerStyle = {
  margin: '10rem auto',
}

const Highscores = () => {
  const [playerHighscores, setPlayerHighscores] = useState([]);
  const { isLoading, sendRequest } = useHttpRequest(); // Extract and handle isLoading & error
  let navigate = useNavigate();

  useEffect(() => {
    sendRequest(
      {
        url: 'http://localhost:3001/highscores?_sort=score&_order=desc&_start=0&_end=10',
      },
      setPlayerHighscores
    );
  }, [sendRequest]);

  const returnClickHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h1 className={styles.Heading}>Highscores</h1>
        <p className={styles.Description}>Describe how is player score calculated.</p>
        <FadeLoader color={'navy'} loading={isLoading} cssOverride={spinnerStyle} size={150} />
        {!isLoading && (
          <div className={styles.ScoresTable}>
            <div className={styles.TableHeader}>
              <div className={styles.LeftColumn}>Position</div>
              <div className={styles.CenterColumn}>Player</div>
              <div className={styles.RightColumn}>Score</div>
            </div>
            {playerHighscores.map((item, index) => {
              return (
                <div className={styles.TableItem} key={index}>
                  <div className={styles.LeftColumn}>{index + 1}</div>
                  <div className={styles.CenterColumn}>{item.player}</div>
                  <div className={styles.RightColumn}>{item.score}</div>
                </div>
              );
            })}
            <div className={styles.ButtonsPanel}>
              <Button text='Return to menu' onClick={returnClickHandler} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highscores;
