import { HorizontalList } from '../components/HorizontalList';
import React from 'react';
import { View } from 'react-native';
import { colors } from '../utils/pokemonTypeColors.helper';

import { IconFiles, IconNames } from '../utils/iconNames.helper';
import { SvgProps } from 'react-native-svg';

type PokemonType = {
  name: string;
  textColor: string;
};

type PokemonData = {
  name: string;
  details: string[];
  spriteUrl: string;
  spriteBack: string;
  Icon: React.FC<SvgProps>;
  types: PokemonType[];
};

type TListDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

type TArgs = {
  title: string;
  emptyMessage: string;
  data: PokemonData[];
};

const ListData: TListDataProps = {
  title: 'ListData',
  component: HorizontalList,
  args: {
    title: 'Last Visited',
    emptyMessage: 'not visited a card yet',
    data: [
      {
        name: 'pokemon',
        details: ['detail1', 'detail2', 'detail3'],
        spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'1'}.png`,
        spriteBack: `https://kai-tw.github.io/PokeCard/backgrounds/${'grass'}.png`,
        Icon: IconFiles[IconNames['grass']],
        types: [
          { name: 'grass', textColor: colors['grass'] },
          { name: 'poison', textColor: colors['poison'] },
        ],
      },
      {
        name: 'pokemon2',
        details: ['detail1', 'detail2', 'detail3'],
        spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'2'}.png`,
        spriteBack: `https://kai-tw.github.io/PokeCard/backgrounds/${'poison'}.png`,
        Icon: IconFiles[IconNames['poison']],
        types: [
          { name: 'poison', textColor: colors['poison'] },
          { name: 'grass', textColor: colors['grass'] },
        ],
      },
    ],
  },
  decorators: [
    (Story: React.FC<any>) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ListData;

export const Basic = {};

export const NoData = {
  args: {
    emptyMessage: 'No Data yet!',
    data: [],
  },
};
