const cityNameChecker = value => {
  value = value.toLowerCase().replace(/\s/g, '');
  return value === '' || /^[a-zа-яіїєґ\\-]+(?:\s[a-zа-яіїєґ\\-]+)*$/i.test(value);
};

export default cityNameChecker;
