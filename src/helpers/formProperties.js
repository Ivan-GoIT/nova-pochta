import { getTtnInfoThunk } from 'redux/ttn/ttn.thunk';
import ttnChecker from './ttnChecker';
import cityNameChecker from './cityNameChecker';

const formProperties = {
  ttn: {
    name: 'ttn-query',
    pattern: '\\d{14}',
    title: 'Номер відправлення має складатися з 14 цифр',
    placeholder: 'Введіть номер ТТН',
    formSubmitHandler: getTtnInfoThunk,
    valueChecker: ttnChecker,
    btnTitle: 'Перевірити статус',
  },
  office: {
    name: 'offise-query',
    pattern: '/^[a-zа-яіїєґ-]*+(?:s[a-zа-яіїєґ-]+)*$/i',
    title: 'Місто',
    placeholder: 'Введіть назву',
    formSubmitHandler: getTtnInfoThunk,
    valueChecker: cityNameChecker,
    btnTitle: 'Показати відділення',
  },
};

export default formProperties;
