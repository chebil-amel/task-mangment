import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '337a8d38-a715-43e9-b253-1ec2d78115e9',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c94d8a73-3dcb-4bf0-bbb5-b7ac56322eaf',
};

export const sampleWithFullData: IAuthority = {
  name: '0cc54677-3f83-4bbf-ae63-418660eb638c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
