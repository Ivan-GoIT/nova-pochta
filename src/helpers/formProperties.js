import ttnChecker from './ttnChecker';

const {
  default: ttnFormSubmitHandler,
} = require('./formSubmitHandlers/ttnFormSubmitHandler');

const formProperties = {
  ttn: {
    title:
      'Номер відправлення має складатися з 14 цифр та починатися з 2 або 5',
    placeholder: 'Введіть номер ТТН',
    formSubmitHandler: ttnFormSubmitHandler,
    valueChecker: ttnChecker,
  },
};

export default formProperties;
