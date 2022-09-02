import styles from './SuccessModal.module.css';
import Button from '../../../components/Button';

const BackModal = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Text}>
        <p>Congratulations!</p>
        <p>You have found all matches and achieved score (less is better): {props.playerScore}</p>{' '}
      </div>
      <div className={styles.Controls}>
        <Button text='Continue' onClick={props.onConfirm} />
      </div>
    </div>
  );
};

export default BackModal;
