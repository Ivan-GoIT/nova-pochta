import { someInitState } from "./some/some.init-state";
import { ttnInitState } from "./ttn/ttn.init-state";

export const rootInitState = {
  ttn: ttnInitState,
  some: someInitState,
};
