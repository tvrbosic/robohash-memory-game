import styles from './ExitModal.module.css';
import Button from '../../../components/Button';

const BackModal = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Text}>Are you sure you want to exit game?</div>
      <div className={styles.Controls}>
        <Button text='Cancel' onClick={props.onClose} />
        <Button text='Confirm' onClick={props.onConfirm} />
      </div>
    </div>
  );
};

export default BackModal;
