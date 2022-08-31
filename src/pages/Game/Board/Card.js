import { useState } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const [isActive, setIsActive] = useState(false);

  const cardClickHandler = () => {
    setIsActive((previousIsActive) => {
      return !previousIsActive;
    });
  };

  const cardContentStyles = isActive ? `${styles.Content} ${styles.Active}` : `${styles.Content}`;

  return (
    <div className={styles.Card} onClick={cardClickHandler}>
      <div className={cardContentStyles}>
        <div className={styles.Front}>
        </div>
        <div className={styles.Back}>
          <img
            src={`https://robohash.org/${props.hash}.png?size=200x200`}
            className={styles.Image}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
