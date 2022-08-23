import classes from './PrimaryButton.module.css';

const PrimaryButton = (props) => {
  return <button className={classes.PrimaryButton} onClick={props.onclick}>{props.text}</button>
};

export default PrimaryButton;
