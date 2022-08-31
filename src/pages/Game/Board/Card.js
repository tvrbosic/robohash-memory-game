import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.ImageBackground}>
        <img src={`https://robohash.org/${props.hash}.png?size=200x200`} className={styles.Image} />
      </div>
    </div>
  );
};

export default Card;
