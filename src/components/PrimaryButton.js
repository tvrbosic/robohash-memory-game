import styles from './PrimaryButton.module.css';

const PrimaryButton = (props) => {
  return (
    <button className={styles.PrimaryButton} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
