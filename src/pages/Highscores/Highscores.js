import { useNavigate } from 'react-router-dom';

import classes from './Highscores.module.css';
import PrimaryButton from '../../components/PrimaryButton';

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

  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <h1 className={classes.Heading}>Highscores</h1>
        <p>Describe how is player score calculated.</p>
        <ul className={classes.ScoresTable}>
          {samplePlayerScores.map((item, index) => {
            return (
              <li key={item.id} className={classes.PlayerRecord}>
                <span>{index + 1}</span>
                <span>{item.username}</span>
                <span>{item.score}</span>
              </li>
            );
          })}
        </ul>
        <div>
          <PrimaryButton text='Return to menu' onClick={returnClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Highscores;
