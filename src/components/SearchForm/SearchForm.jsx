import { useDispatch } from 'react-redux';
import css from './SearchForm.module.css';

import { useState } from 'react';

const SearchForm = ({
  name,
  pattern,
  title,
  placeholder,
  formSubmitHandler,
  valueChecker,
}) => {

  const [value, setValue] = useState('');

  const dispatch= useDispatch()

  const onChangeHandler = env => {
    const { value } = env.currentTarget;
    if (valueChecker(value)) setValue(value);
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    dispatch(formSubmitHandler(value));
    setValue('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name={name}
        pattern={pattern}
        required
        title={title}
        placeholder={placeholder}
        className={css.input}
        onChange={onChangeHandler}
        value={value}
      />
      <button type="submit">Перевірити статус</button>
    </form>
  );
};

export default SearchForm;
