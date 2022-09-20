import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
  //console.log(props.value);
  let progressBarFill = 5 + '%';
  if (props.value > 0) {
    progressBarFill = props.value + '%';
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Fill} style={{ width: progressBarFill }}></div>
    </div>
  );
};

export default ProgressBar;
