type ColorMap = {
  [key: string]: string;
};

const pokemonColors: ColorMap = {
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

const darkenColor = (color: string): string => {
  const hex = color.replace('#', '');
  const [r, g, b] = hex.match(/.{1,2}/g)?.map((component) => parseInt(component, 16)) || [];

  if (!r || !g || !b) {
    return '#000';
  }

  const darkenedR = Math.max(0, Math.round(r * 0.8));
  const darkenedG = Math.max(0, Math.round(g * 0.8));
  const darkenedB = Math.max(0, Math.round(b * 0.8));

  return `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB
    .toString(16)
    .padStart(2, '0')}`;
};

const pokemonColorsWithDarken: ColorMap = {};

Object.keys(pokemonColors).forEach((type) => {
  const color = pokemonColors[type];
  const darkenType = `darken${type.charAt(0).toUpperCase()}${type.slice(1)}`;
  const darkenValue = darkenColor(color!);
  pokemonColorsWithDarken[darkenType] = darkenValue;
});

const getPokemonColor = (type: string): string => pokemonColors[type] || '#777';

export default getPokemonColor;

export const colors = {
  ...pokemonColors,
  ...pokemonColorsWithDarken,
};
