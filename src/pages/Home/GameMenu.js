import { useNavigate } from 'react-router-dom';

import styles from './GameMenu.module.css';
import useInput from '../../hooks/use-input';
import TextInput from '../../components/Input';
import Select from '../../components/Select';
import PrimaryButton from '../../components/PrimaryButton';

const boardSizes = [
  { id: 1, size: 'Small: 4x4' },
  { id: 2, size: 'Medium: 6x4' },
  { id: 3, size: 'Large: 6x6' },
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

  let navigate = useNavigate();

  const playClickHandler = () => {
    // If username is not touched, manually trigger validation (will modify usernameHasError)
    if (!usernameTouched) {
      validateUsername();
    }
    // If username has been touched and has no errors, continue
    else if (!usernameHasError) {
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
        <Select id='board-size' options={boardSizes} />
      </div>
      <div className={styles.MenuItem}>
        <PrimaryButton text='Play' onClick={playClickHandler} />
      </div>
      <div className={styles.MenuItem}>
        <PrimaryButton text='Highscores' onClick={highscoresClickHandler} />
      </div>
    </div>
  );
};

export default GameMenu;
