import styles from './Button.module.css';

const Button = (props) => {
  const buttonClasses = props.buttonStyle
    ? `${styles.Button} ${styles[props.buttonStyle]}`
    : `${styles.Button} ${styles.Primary}`;

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
