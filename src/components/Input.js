import classes from './Input.module.css';

const TextInput = (props) => {
  return (
    <input
      id={props.id}
      type='text'
      className={classes.TextInput}
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;
