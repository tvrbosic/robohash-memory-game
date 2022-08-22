import classes from './GameMenu.module.css';
import TextInput from '../../components/Input';

const GameMenu = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.MenuItem}>
        <label for='username'>Username</label>
        <TextInput id='username' />
      </div>
      <div className={classes.MenuItem}>
        <label for='board-size'>Board size</label>
        <select id='board-size' type='select'>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div>
        <button>Play</button>
      </div>
      <div>
        <button>Scoreboard</button>
      </div>
    </div>
  );
};

export default GameMenu;
