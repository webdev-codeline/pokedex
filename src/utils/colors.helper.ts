import {
  DarkColorMap,
  DarkenPokemonTypes,
  LightColorMap,
  PokemonColorMap,
  PokemonColors,
  PokemonTypes,
  pokemonColors,
} from '@/types/color';

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
  type ? (`darken${type.charAt(0).toUpperCase()}${type.slice(1)}` as DarkenPokemonTypes) : 'darkenNormal';

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
