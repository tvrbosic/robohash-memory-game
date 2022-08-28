import { useReducer } from 'react';

const initialState = {
  value: '',
  isValid: false,
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      value: action.payload.value,
      isValid: action.payload.isValid,
      isTouched: state.isTouched,
    };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isValid: state.isValid, isTouched: true };
  }
  if (action.type === 'VALIDATE') {
    return { value: state.value, isValid: action.payload.isValid, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isValid: false, isTouched: false };
  }
  return initialState;
};

const useInput = (validateInput) => {
  const [state, dispatch] = useReducer(inputStateReducer, initialState);

  const hasError = !state.isValid && state.isTouched;

  const onChangeHandler = (event) => {  
    dispatch({
      type: 'CHANGE',
      payload: { value: event.target.value, isValid: validateInput(event.target.value) },
    });
  };

  const validateHandler = () => {
    dispatch({ type: 'VALIDATE', payload: { isValid: validateInput(state.value) } });
  };

  const onBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const onResetHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: state.value,
    isValid: state.isValid,
    isTouched: state.isTouched,
    hasError,
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    validate: validateHandler,
    reset: onResetHandler,
  };
};

export default useInput;
