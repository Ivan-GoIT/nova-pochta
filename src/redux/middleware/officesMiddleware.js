import { addCitiInSateAction } from 'redux/offices/offices.slice';
import { getOfficesAtCityThunk } from 'redux/offices/offices.thunk';

const officesMiddleware = store => next => action => {

  if (action.type === getOfficesAtCityThunk.fulfilled.type) {
    store.dispatch(addCitiInSateAction(action.payload.city));
  }

  return next(action);
};

export default officesMiddleware;
