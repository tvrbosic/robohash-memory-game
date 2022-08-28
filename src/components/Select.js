import styles from './Select.module.css';

const Select = (props) => {
  return (
    <select id={props.id} className={styles.Select}>
      {props.options.map((item)=>{
        return <option key={item.id}>{item.size}</option>
      })}
    </select>
  );
};

export default Select;
