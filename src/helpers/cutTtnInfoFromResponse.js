export const cutTtnInfoFromResponse = response => {
  const {
    Status: statusTtn,
    WarehouseSender: sender,
    WarehouseRecipient: recipient,
    CitySender: citySender,
  } = response.data.data[0];

  response.data = {
    statusTtn,
    sender,
    recipient,
    citySender,
  };
  return response;
};