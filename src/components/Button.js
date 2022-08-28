import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={styles.PrimaryButton} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
