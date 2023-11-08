import { Action } from 'src/types/action';
import { HistoryStore } from 'src/types/history';
import * as types from '../constants';

const initialState: HistoryStore = {
  visited: [],
  history: [],
};

const historyReducer = (state = initialState, { type, payload: { id } }: Action) => {
  if (type === types.ADD_HISTORY) {
    return { ...state, history: [...state.history, id] };
  }

  if (type === types.ADD_VISIT) {
    return { ...state, visited: [...state.visited, id] };
  }

  return state;
};

export default historyReducer;
