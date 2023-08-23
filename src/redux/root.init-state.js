import { historyInitState } from './history/history.init-state';
import { officesInitState } from './offices/offices.init-state';
import { ttnInitState } from './ttn/ttn.init-state';

export const rootInitState = {
  ttn: ttnInitState,
  history: historyInitState,
  offices: officesInitState,
};
