import { useNavigate } from 'react-router-dom';

import styles from './ControlsPanel.module.css';
import PrimaryButton from '../../components/PrimaryButton';

const ControlsPanel = () => {
  let navigate = useNavigate();

  const backClickHandler = () => {
    navigate('/');
  };

  const resetClickHandler = () => {
    console.log('Todo');
  };

  return (
    <div className={styles.Container}>
      <PrimaryButton text='Back' onClick={backClickHandler} />
      <PrimaryButton text='Reset' onClick={resetClickHandler} />
    </div>
  );
};

export default ControlsPanel;
