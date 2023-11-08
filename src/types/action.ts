import { PokemonTypes } from './color';

export type Action = {
  type: 'addHistory' | 'addVisit';
  payload: {
    id: number;
  };
};

export type NavigationInput = {
  id: number;
  type: PokemonTypes;
  ancestorId?: number;
};
