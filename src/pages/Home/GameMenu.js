import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './GameMenu.module.css';
import { gameActions } from '../../store/game-slice';
import useInput from '../../hooks/use-input';
import TextInput from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const boardSizes = [
  { id: 1, value: 16, text: '16 cards' },
  { id: 2, value: 24, text: '24 cards' },
  { id: 3, value: 36, text: '36 cards' },
];

const isNotEmpty = (value) => value.trim() !== '';

const GameMenu = () => {
  const {
    value: username,
    isTouched: usernameTouched,
    hasError: usernameHasError,
    onChange: usernameChangeHandler,
    onBlur: usernameBlurHandler,
    validate: validateUsername,
  } = useInput(isNotEmpty);
  const [cardCount, setCardCount] = useState(16);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const selectBoardSizeHandler = (event) => {
    setCardCount(event.target.value);
  };

  const playClickHandler = () => {
    // If username is not touched, manually trigger validation (will modify usernameHasError)
    if (!usernameTouched) {
      validateUsername();
    }
    // If username has been touched and has no errors, continue
    else if (!usernameHasError) {
      // Set data
      dispatch(gameActions.setPlayer(username));
      dispatch(gameActions.setCardsCount(cardCount));
      // Clear previous games data
      dispatch(gameActions.resetActiveCards());
      dispatch(gameActions.resetMatchedCards());
      dispatch(gameActions.resetMovesCounter());
      
      
      navigate('/play');
    }
  };

  const highscoresClickHandler = () => {
    navigate('/highscores');
  };

  return (
    <div className={styles.Container}>
      <div className={styles.InputMenuItem}>
        <label htmlFor='username' className={`${usernameHasError && styles.InvalidLabel}`}>
          Username
        </label>
        <TextInput
          id='username'
          value={username}
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
          className={`${usernameHasError && styles.InvalidInput}`}
        />
      </div>
      <div className={styles.InputMenuItem}>
        <label htmlFor='board-size'>Board size</label>
        <Select id='board-size' options={boardSizes} onChange={selectBoardSizeHandler} />
      </div>
      <div className={styles.MenuItem}>
        <Button text='Play' onClick={playClickHandler} />
      </div>
      <div className={styles.MenuItem}>
        <Button text='Highscores' onClick={highscoresClickHandler} />
      </div>
    </div>
  );
};

export default GameMenu;
