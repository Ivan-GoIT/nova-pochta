import { useDispatch, useSelector } from 'react-redux';
import css from './TTNCheckerPage.module.css';
import { useState } from 'react';
import { getTtnThunk } from '../../redux/some/some.thunk';

const TTNCheccerPage = () => {
  const some = useSelector(state => state.some);

  const dispatch = useDispatch();

  const [ttnString, setTtnString] = useState('');

  const handleFilterChange = evt => {
    const inputValue = evt.currentTarget.value.replace(/\s/g, '');
    if (!/^\d{0,14}$/.test(inputValue)) return;
    setTtnString(inputValue);
  };
  const onClickHandler = () => {
    if (ttnString.length !== 14) {
      console.log(ttnString.length);
      alert('Должно быть 14 цыфр');
    }
    dispatch(getTtnThunk(ttnString));
  };

  return (
    <>
      <input
        className={css.input}
        placeholder="Enter TTN"
        type="text"
        name="TTN number"
        required
        value={ttnString}
        onChange={handleFilterChange}
      />
      <button type="button" className={css.button} onClick={onClickHandler}>
        Get status TTN
      </button>

      {some.data && Object.keys(some.data).length > 0 && (
        <div>
          <p>Статус доставки: {some.data.statusTtn}</p>
          <p>Відправлено: {some.data.citySender && some.data.sender}</p>
          <p>Отримано: {some.data.recipient}</p>
        </div>
      )}

      <div>
        <p>Історія</p>
        <ul className={css.listStyle}>
          <li>59000857406500</li>
          <li>20400048799003</li>
          <li>20400048799004</li>
        </ul>
      </div>
    </>
  );
};

export default TTNCheccerPage;
