import styles from './FetchError.module.css';
import Button from '../../components/Button';

const FetchError = (props) => {
  return (
    <div className={styles.Container}>
      <p className={styles.Text}>An error occured while fetching data. Please try again later!</p>
      <Button text='Return to menu' onClick={props.onReturnClick} />
    </div>
  );
};

export default FetchError;
