export const cutTtnInfoFromResponse = response => {
  const {
    Number:ttnNumber,
    Status: statusTtn,
    WarehouseSender: sender,
    WarehouseRecipient: recipient,
    CitySender: citySender,
  } = response.data.data[0];

  response.data = {
    ttnNumber,
    statusTtn,
    sender,
    recipient,
    citySender,
  };
  return response;
};