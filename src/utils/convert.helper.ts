import { CardProps } from '@/components/Card';
import { PokemonFindByIdQuery, PokemonSearchByNameQuery } from '@/hooks';
import { PokemonTypes } from '@/types/color';
import { Pokemon } from '@/types/mapped';

export const capitalizeFirstLetter = (text: string) => (!!text ? text.charAt(0).toUpperCase() + text.slice(1) : '');

export const statNameToTile = (name: string) =>
  name === 'hp' ? name.toUpperCase() : capitalizeFirstLetter(name).replace('-', ' ');

export const toCardData = (data: PokemonSearchByNameQuery) =>
  data.pokemons.map(({ id, abilities, types, name, specy }) => {
    // TODO validate the result via zod
    // TODO remove the default value and throw error incase of invalid data
    return {
      id,
      name,
      ancestorId: specy?.evolves_from_species_id ?? null,
      abilities: abilities.map(({ ability }) => ability?.name),
      type: types[0]?.type?.name || 'normal',
    } as CardProps;
  });

export const toDetailsData = (data: PokemonFindByIdQuery) =>
  data.pokemon.map(({ id, name, weight, height, moves, types, stats }) => {
    // TODO validate the result via zod
    // TODO remove the default value and throw error incase of invalid data
    return {
      id,
      name,
      weight: weight ?? 0,
      height: height ?? 0,
      stats: stats.map(({ base_stat: value, info }) => ({ value, name: info?.name ?? '' })),
      moves: moves.map(({ move }) => move?.name),
      type: types[0]?.type?.name || 'normal',
      types: types.map(({ type }) => type?.name as PokemonTypes),
    } as Pokemon;
  });
