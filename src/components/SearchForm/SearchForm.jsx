import { useDispatch } from 'react-redux';
import css from './SearchForm.module.css';

import { useState } from 'react';
import Button from 'components/Button/Button';

const SearchForm = ({
  name,
  pattern,
  title,
  placeholder,
  formSubmitHandler,
  btnTitle,
  valueChecker = () => {},
}) => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onChangeHandler = env => {
    const { value } = env.currentTarget;
    console.log('value1', value);

    if (!valueChecker(value)) return;
    console.log('value2', value);
    setValue(value);
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
      <Button type="submit" title={btnTitle} />
    </form>
  );
};

export default SearchForm;
