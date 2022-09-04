import styles from './SuccessModal.module.css';
import Button from '../../components/Button';

const BackModal = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Message}>
        <h2 className={styles.Heading}>Congratulations!</h2>
        <p>You have found all matches.</p>
        <p>
          Achieved score: <span className={styles.Score}>{props.playerScore}</span>
        </p>
      </div>
      <div className={styles.Controls}>
        <Button text='Continue' onClick={props.onConfirm} />
      </div>
    </div>
  );
};

export default BackModal;
