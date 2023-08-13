import { getTtnInfoThunk } from 'redux/ttn/ttn.thunk';
import ttnChecker from './ttnChecker';

const formProperties = {
  ttn: {
    name: 'ttn-query',
    pattern: '\\d{14}',
    title: 'Номер відправлення має складатися з 14 цифр',
    placeholder: 'Введіть номер ТТН',
    formSubmitHandler: getTtnInfoThunk,
    valueChecker: ttnChecker,
  },
};

export default formProperties;
