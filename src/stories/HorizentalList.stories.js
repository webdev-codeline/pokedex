import { HorizontalList } from '../components/HorizontalList';
import React from 'react';
import { View } from 'react-native';
import { colors } from '../utils/pokemonTypeColors.helper';

import { IconFiles, IconNames } from '../utils/iconNames.helper';

const ListData = {
  title: 'ListData',
  component: HorizontalList,
  args: {
    title: 'Last Visited',
    emptyMessage: 'not visited a card yet',
    data: [
      {
        name: 'pokemon',
        details: ['detail1', 'detail2', 'detail3'],
        // todo add pokemon id to below url
        spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'1'}.png`,
        // todo add pokemon first type name to these 4 below
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
        // todo add pokemon id to below url
        spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'2'}.png`,
        // todo add pokemon first type name to these 4 below
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
    (Story) => (
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
