import classes from './Input.module.css';

const TextInput = (props) => {
  return <input className={classes.TextInput} id={props.id} type='text' />
};

export default TextInput;