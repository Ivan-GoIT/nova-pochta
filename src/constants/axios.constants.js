export const BASE_URL='https://api.novaposhta.ua/v2.0/json/ '
export const TRACKING=(val)=>({
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: val,
          Phone: '',
        },
      ],
      Language: 'UK',
    },
    system: 'Tracking',
  });