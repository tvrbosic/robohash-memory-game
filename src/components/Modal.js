import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
   return <div className={styles.Backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
   return (
      <div className={styles.Modal}>
         <div className={styles.Content}>{props.children}</div>
      </div>
   );
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
   return (
      <>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
      </>
   );
};

export default Modal;
