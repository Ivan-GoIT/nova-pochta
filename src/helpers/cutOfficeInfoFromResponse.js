export const cutOfficeInfoFromResponse = response => {
  const result = response.data.data.reduce((acc, item) => {
    const { Description: description, Schedule: schedule } = item;
    const [place,address]=description.split(':')
    acc.push({ place,address, schedule });
    return acc;
  }, []);
  return result;
};
