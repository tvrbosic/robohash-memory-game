import { useNavigate } from 'react-router-dom';

import classes from './GameMenu.module.css';
import TextInput from '../../components/Input';
import Select from '../../components/Select';
import PrimaryButton from '../../components/PrimaryButton';

const boardSizes = [
  { id: 1, size: 'Small: 4x4' },
  { id: 2, size: 'Medium: 6x4' },
  { id: 3, size: 'Large: 6x6' },
];

const GameMenu = () => {
  let navigate = useNavigate();

  const playClickHandler = () => {
    navigate('/play');
  };
  
  const highscoresClickHandler = () => {
    navigate('/highscores');
  };

  return (
    <div className={classes.Container}>
      <div className={classes.InputMenuItem}>
        <label htmlFor='username'>Username</label>
        <TextInput id='username' placeholder='Enter username...'/>
      </div>
      <div className={classes.InputMenuItem}>
        <label htmlFor='board-size'>Board size</label>
        <Select id='board-size' options={boardSizes} />
      </div>
      <div className={classes.MenuItem}>
        <PrimaryButton text='Play' onClick={playClickHandler}/>
      </div>
      <div className={classes.MenuItem}>
        <PrimaryButton text='Highscores' onClick={highscoresClickHandler} />
      </div>
    </div>
  );
};

export default GameMenu;
