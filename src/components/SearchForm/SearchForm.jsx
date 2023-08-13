import css from './SearchForm.module.css'

import { useState } from "react";

const SearchForm = ({
  title,
  placeholder,
  formSubmitHandler,
  valueChecker,
}) => {
  const [value, setValue] = useState('');
console.log(value)
  const onChangeHandler = env => {
    const { value } = env.currentTarget;
    if (valueChecker(value)) setValue(value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="query"
        pattern="^(5|2)([0-9]{13})$"
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
