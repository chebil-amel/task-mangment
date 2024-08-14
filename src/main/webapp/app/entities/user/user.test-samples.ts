import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1004,
  login: '1@DXwk\\VI1m4-\\uem',
};

export const sampleWithPartialData: IUser = {
  id: 28682,
  login: '.V@4Uh',
};

export const sampleWithFullData: IUser = {
  id: 20863,
  login: '+I@F6',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
