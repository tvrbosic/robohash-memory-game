import { useNavigate } from 'react-router-dom';

import styles from './ControlsPanel.module.css';
import Button from '../../components/Button';

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
      <Button text='Back' onClick={backClickHandler} />
      <Button text='Reset' onClick={resetClickHandler} />
    </div>
  );
};

export default ControlsPanel;
