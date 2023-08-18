import { addTtnInHistoryAction } from 'redux/history/history.slice';
import { getOfficesAtCity } from 'redux/offices/offices.thunk';

const officesMiddleware = store => next => action => {
  if (action.type === getOfficesAtCity.fulfilled.type) {
    store.dispatch(addTtnInHistoryAction(action.payload.city));
  }
  return next(action);
};

export default officesMiddleware;
