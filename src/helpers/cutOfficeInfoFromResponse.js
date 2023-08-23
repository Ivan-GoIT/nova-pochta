export const cutOfficeInfoFromResponse = response => {
  const data = response.data.data;
  const city = data[0].CityDescription;

  const offices = data.reduce((acc, item) => {
    const { Description: description, Schedule: schedule } = item;
    const [place, address] = description.split(':');
    acc.push({ place, address, schedule });
    return acc;
  }, []);

  return { city, offices };
};
