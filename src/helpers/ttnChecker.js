const ttnChecker = value => {
  value.replace(/\s/g, '');
  return /^\d{0,14}$/.test(value);
};
export default ttnChecker;
