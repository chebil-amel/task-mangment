import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 7109,
  title: 'gosh kiddingly',
};

export const sampleWithPartialData: ITask = {
  id: 29728,
  title: 'peep coaxingly disconnection',
  description: 'syrup pfft yuck',
  completed: false,
};

export const sampleWithFullData: ITask = {
  id: 23816,
  title: 'rapidly duh brace',
  description: 'quietly solicit sandy',
  dueDate: dayjs('2024-08-14'),
  completed: true,
};

export const sampleWithNewData: NewTask = {
  title: 'metallurgist suspiciously than',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
