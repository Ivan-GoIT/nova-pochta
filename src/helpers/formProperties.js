import ttnChecker from './ttnChecker';

const {
  default: ttnFormSubmitHandler,
} = require('./formSubmitHandlers/ttnFormSubmitHandler');

const formProperties = {
  ttn: {
    name: 'ttn-query',
    pattern: '\\d{14}',
    title: 'Номер відправлення має складатися з 14 цифр',
    placeholder: 'Введіть номер ТТН',
    formSubmitHandler: ttnFormSubmitHandler,
    valueChecker: ttnChecker,
  },
};

export default formProperties;
