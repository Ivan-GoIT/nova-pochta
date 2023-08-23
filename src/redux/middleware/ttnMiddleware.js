import { addTtnInHistoryAction } from 'redux/history/history.slice';
import { getTtnInfoThunk } from 'redux/ttn/ttn.thunk';

const ttnMiddleware = store => next => action => {

  if (action.type === getTtnInfoThunk.fulfilled.type) {
    store.dispatch(addTtnInHistoryAction(action.payload.ttnNumber));
  }

  return next(action);
};

export default ttnMiddleware;
