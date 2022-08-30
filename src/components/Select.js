import styles from './Select.module.css';

const Select = (props) => {
  return (
    <select id={props.id} className={styles.Select} onChange={props.onChange}>
      {props.options.map((item)=>{
        return <option key={item.id} value={item.value}>{item.text}</option>
      })}
    </select>
  );
};

export default Select;
