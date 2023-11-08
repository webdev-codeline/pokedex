import { PokemonTypes } from './color';

export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  type: PokemonTypes;
  types: PokemonTypes[];
  stats: { name: string; value: number }[];
  moves: string[];
  ancestorId: number;
  onPressCallback?: () => void;
};
