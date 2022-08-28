import { useReducer } from 'react';

const initialState = {
  value: '',
  isValid: null,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'CHANGE') {
    console.log(action.payload)
    return { value: action.payload.value, isValid: action.payload.isValid };
  }
  if (action.type === 'RESET') {
    return { value: '', isValid: null };
  }
  return initialState;
};

const useInput = (validateInput) => {
  const [state, dispatch] = useReducer(inputStateReducer, initialState);

  const onChangeHandler = (event) => {
    dispatch({ type: 'CHANGE', payload: { value: event.target.value, isValid: validateInput(event.target.value) } });
  };

  const onResetHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: state.value,
    isValid: state.isValid,
    onChange: onChangeHandler,
    reset: onResetHandler,
  };
};

export default useInput;
