import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ControlsPanel.module.css';
import { gameActions } from '../../../store/game-slice';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import ExitModal from './ExitModal';

const ControlsPanel = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const confirmExitHandler = () => {
    // Reset game data
    dispatch(gameActions.setPlayer(''));
    dispatch(gameActions.resetMatchedCards());
    dispatch(gameActions.resetMovesCounter());

    navigate('/');
  };

  const exitClickHandler = () => {
    setDisplayModal(true);
  };

  const hideModalHandler = () => {
    setDisplayModal(false);
  };

  return (
    <div className={styles.Container}>
      <Button text='Exit' onClick={exitClickHandler} />
      {displayModal && (
        <Modal onClose={hideModalHandler}>
          <ExitModal onConfirm={confirmExitHandler} onClose={hideModalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default ControlsPanel;
