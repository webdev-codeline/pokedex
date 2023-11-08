import { Action } from 'src/types/action';
import * as types from '../constants';

export const addHistory: (id: number) => Action = (id: number) => ({ type: types.ADD_HISTORY, payload: { id } });
export const addVisit: (id: number) => Action = (id: number) => ({ type: types.ADD_VISIT, payload: { id } });
