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
  return (
    <div className={classes.Container}>
      <div className={classes.InputMenuItem}>
        <label for='username'>Username</label>
        <TextInput id='username' placeholder='Enter username...'/>
      </div>
      <div className={classes.InputMenuItem}>
        <label for='board-size'>Board size</label>
        <Select id='board-size' options={boardSizes} />
      </div>
      <div className={classes.MenuItem}>
        <PrimaryButton text='Play' />
      </div>
      <div className={classes.MenuItem}>
        <PrimaryButton text='Scoreboard' />
      </div>
    </div>
  );
};

export default GameMenu;
