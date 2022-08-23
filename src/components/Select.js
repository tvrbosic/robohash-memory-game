import classes from './Select.module.css';

const Select = (props) => {
  return (
    <select id={props.id} className={classes.Select}>
      {props.options.map((item)=>{
        return <option key={item.id}>{item.size}</option>
      })}
    </select>
  );
};

export default Select;
