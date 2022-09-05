import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import styles from './Highscores.module.css';
import useHttpRequest from '../../hooks/use-http-request';
import Scoreboard from './Scoreboard';
import FetchError from './FetchError';

const spinnerStyle = {
  margin: '14rem auto',
};

const Highscores = () => {
  const [playerHighscores, setPlayerHighscores] = useState([]);
  const { isLoading, error, sendRequest } = useHttpRequest(); // Extract and handle isLoading & error
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
        <FadeLoader color={'navy'} loading={isLoading} cssOverride={spinnerStyle} size={150} />
        {!isLoading && !error && (
          <Scoreboard playerHighscores={playerHighscores} onReturnClick={returnClickHandler} />
        )}
        {!isLoading && error && <FetchError onReturnClick={returnClickHandler} />}
      </div>
    </div>
  );
};

export default Highscores;
