import { useDispatch, useSelector } from 'react-redux';
import css from './TtnHistory.module.css';
import { selectHistory } from 'redux/history/history.selectors';
import { getTtnInfoThunk } from 'redux/ttn/ttn.thunk';
import { clearHistoryAction } from 'redux/history/history.slice';

import { nanoid } from 'nanoid';
import Button from 'components/Button/Button';

const TtnHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(selectHistory);

  const ttnItemClickHandler = evt => {
    dispatch(getTtnInfoThunk(evt.target.innerText));
  };

  const clearHistoryHandler = () => {
    dispatch(clearHistoryAction());
  };

  return (
    history.length > 0 && (
      <div className={css.history}>
        <h2 className={`${css.title}`}>Історія</h2>
        <ul className={css.history_list}>
          {history.map(item => (
            <li
              key={nanoid()}
              className={`${css.item}`}
              onClick={ttnItemClickHandler}
            >
              {item}
            </li>
          ))}
        </ul>
        <Button
          type="button"
          title="Очистити"
          onClickHandler={clearHistoryHandler}
        />
      </div>
    )
  );
};

export default TtnHistory;
