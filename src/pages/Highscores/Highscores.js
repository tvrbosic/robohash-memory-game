import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import styles from './Highscores.module.css';
import useHttpRequest from '../../hooks/use-http-request';
import Select from '../../components/Select';
import Scoreboard from './Scoreboard';
import FetchError from './FetchError';

const boardSizes = [
  { id: 0, value: 'A', text: 'All' },
  { id: 1, value: 'S', text: '16 cards' },
  { id: 2, value: 'M', text: '24 cards' },
  { id: 3, value: 'L', text: '36 cards' },
];

const spinnerStyle = {
  margin: '14rem auto',
};

const Highscores = () => {
  const [playerHighscores, setPlayerHighscores] = useState([]);
  const [boardSize, setBoardSize] = useState('A');
  const { isLoading, error, sendRequest } = useHttpRequest();
  let navigate = useNavigate();

  useEffect(() => {
    if (boardSize === 'A') {
      sendRequest(
        {
          url: 'http://localhost:3001/highscores?_sort=score&_order=desc&_start=0&_end=10',
        },
        setPlayerHighscores
      );
    } else {
      sendRequest(
        {
          url: `http://localhost:3001/highscores?board=${boardSize}&_sort=score&_order=desc&_start=0&_end=10`,
        },
        setPlayerHighscores
      );
    }
  }, [boardSize, sendRequest]);

  const returnClickHandler = () => {
    navigate('/');
  };

  const selectBoardSizeHandler = (event) => {
    setBoardSize(event.target.value);
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>Highscores</h1>
      <div className={styles.SelectBoardContainer}>
        <label htmlFor='board-size'>Board size</label>
        <Select
          id='board-size'
          options={boardSizes}
          onChange={selectBoardSizeHandler}
        />
      </div>
      <div className={styles.Content}>
        <FadeLoader
          color={'navy'}
          loading={isLoading}
          cssOverride={spinnerStyle}
          size={150}
        />
        {!isLoading && !error && (
          <Scoreboard
            playerHighscores={playerHighscores}
            onReturnClick={returnClickHandler}
          />
        )}
        {!isLoading && error && (
          <FetchError onReturnClick={returnClickHandler} />
        )}
      </div>
    </div>
  );
};

export default Highscores;
