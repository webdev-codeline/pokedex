const pokemonColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export type PokemonTypes = Extract<keyof typeof pokemonColors, string>;
export type DarkenPokemonTypes = `darken${Capitalize<PokemonTypes>}`;
export type PokemonColors = PokemonTypes | DarkenPokemonTypes;

export type LightColorMap = {
  [key in PokemonTypes]: string;
};
export type DarkColorMap = {
  [key in DarkenPokemonTypes]: string;
};
export type PokemonColorMap = {
  [key in PokemonColors]: string;
};

const toHexCode = (value: number) => `${value.toString(16).padStart(2, '0')}`;
const rgbToHex = (r: number) => (g: number) => (b: number) => `#${toHexCode(r)}${toHexCode(g)}${toHexCode(b)}`;

const darkenColor = (color: string): string => {
  const hex = color.replace('#', '');
  const [r, g, b] = hex.match(/.{1,2}/g)?.map((component) => parseInt(component, 16)) || [];

  if (!r || !g || !b) {
    return '#000';
  }

  const darkenedR = Math.max(0, Math.round(r * 0.8));
  const darkenedG = Math.max(0, Math.round(g * 0.8));
  const darkenedB = Math.max(0, Math.round(b * 0.8));

  return rgbToHex(darkenedR)(darkenedG)(darkenedB);
};

export const toDarkKey = (type: PokemonTypes) =>
  `darken${type.charAt(0).toUpperCase()}${type.slice(1)}` as DarkenPokemonTypes;

const pokemonColorsWithDarken: DarkColorMap | Partial<DarkColorMap> = {};

Object.keys(pokemonColors).forEach((type: string) => {
  const pType = type as PokemonTypes;
  const color = pokemonColors[pType];
  const darken: PokemonColors = toDarkKey(pType);
  const darkenValue = darkenColor(color);
  pokemonColorsWithDarken[darken] = darkenValue;
});

export const colors: PokemonColorMap = {
  ...(pokemonColors as LightColorMap),
  ...(pokemonColorsWithDarken as DarkColorMap),
};

const getPokemonColor = (type: PokemonTypes): string => pokemonColors[type] || '#777';

export default getPokemonColor;
