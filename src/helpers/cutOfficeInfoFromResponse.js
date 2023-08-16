export const cutOfficeInfoFromResponse = response => {
  const result = response.data.reduce((acc, item) => {
    const { Description: description, Schedule: schedule } = item;
    acc.push({ description, schedule });
    return acc;
  }, []);
  console.log(result);
  return result;
};
