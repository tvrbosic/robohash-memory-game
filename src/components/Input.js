import styles from './Input.module.css';

const TextInput = (props) => {
  const customStyles = props.className === undefined ? null : props.className;

  return (
    <input
      id={props.id}
      type='text'
      className={`${styles.TextInput}  ${customStyles}`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default TextInput;
